<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		decodeJWT,
		shouldUseJWTWorker,
		JWT_WORKER_THRESHOLD_BYTES,
		type JWTDecodeResult,
		type JWTWorkerRequest,
		type JWTWorkerResponse
	} from '$engines/encode/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser, ShieldAlert } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: JWTDecodeResult) => void;
		reject: (reason: Error) => void;
	};

	const SAMPLE_TOKEN =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

	const STANDARD_CLAIM_KEYS = new Set(['iss', 'sub', 'aud', 'exp', 'nbf', 'iat', 'jti']);

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let decodeResult = $state<JWTDecodeResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let latestProcessToken = 0;

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let workerThresholdLabel = $derived(formatByteSize(JWT_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(shouldUseJWTWorker($input));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		if ($input.length === 0) {
			input.set(SAMPLE_TOKEN);
		}
	});

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const sourceInput = $input;
		const token = ++latestProcessToken;
		const useWorker = shouldUseJWTWorker(sourceInput);
		isProcessing = useWorker;
		void processInput(token, sourceInput, useWorker);
	});

	async function processInput(
		token: number,
		sourceInput: string,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			decodeResult = decodeJWT(sourceInput);
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(sourceInput);
			if (token !== latestProcessToken) return;
			decodeResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			decodeResult = decodeJWT(sourceInput);
			processedByWorker = false;
			addToast('error', $t('ui.jwt.worker_failed', 'Worker processing failed. Falling back to main thread.'));
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/encode-jwt.worker.ts', import.meta.url),
			{ type: 'module' }
		);
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;
		return workerInstance;
	}

	function releaseWorker(): void {
		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}
		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker terminated'));
		}
		pendingWorkerRequests.clear();
	}

	function handleWorkerMessage(event: MessageEvent<JWTWorkerResponse>): void {
		const message = event.data;
		const pending = pendingWorkerRequests.get(message.id);
		if (!pending) return;
		pendingWorkerRequests.delete(message.id);

		if (message.error) {
			pending.reject(new Error(message.error));
			return;
		}
		if (!message.result) {
			pending.reject(new Error('Worker returned no result'));
			return;
		}
		pending.resolve(message.result);
	}

	function handleWorkerError(): void {
		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker runtime error'));
		}
		pendingWorkerRequests.clear();
	}

	function runWorker(token: string): Promise<JWTDecodeResult> {
		const worker = ensureWorker();
		return new Promise<JWTDecodeResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: JWTWorkerRequest = { id: requestId, token };
			worker.postMessage(request);
		});
	}

	function handleTokenInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function loadSample(): void {
		input.set(SAMPLE_TOKEN);
	}

	function clearInput(): void {
		confirmTitle = $t('ui.confirm.clear', { language: 'JWT' }, 'Clear the current token?');
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		input.set('');
		decodeResult = null;
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function noop(): void {
		return;
	}

	async function copyText(text: string, successKey: string, fallback: string): Promise<void> {
		if (!text) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			addToast('success', $t(successKey, fallback));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	async function copyHeader(): Promise<void> {
		if (decodeResult?.ok) {
			await copyText(
				JSON.stringify(decodeResult.data.header, null, 2),
				'ui.toast.copy_success',
				'Copied to clipboard'
			);
		}
	}

	async function copyPayload(): Promise<void> {
		if (decodeResult?.ok) {
			await copyText(
				JSON.stringify(decodeResult.data.payload, null, 2),
				'ui.toast.copy_success',
				'Copied to clipboard'
			);
		}
	}

	async function copySignature(): Promise<void> {
		if (decodeResult?.ok) {
			await copyText(decodeResult.data.signature, 'ui.toast.copy_success', 'Copied to clipboard');
		}
	}

	async function copyJWT(): Promise<void> {
		await copyText($input.trim(), 'ui.toast.copy_success', 'Copied to clipboard');
	}

	function highlightJson(json: string): string {
		const escaped = json
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		return escaped.replace(
			/("(?:[^"\\]|\\.)*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
			(match) => {
				if (match.endsWith(':')) {
					return `<span class="jwt-key">${match}</span>`;
				}
				if (match.startsWith('"')) {
					return `<span class="jwt-string">${match}</span>`;
				}
				if (match === 'true' || match === 'false') {
					return `<span class="jwt-bool">${match}</span>`;
				}
				if (match === 'null') {
					return `<span class="jwt-null">${match}</span>`;
				}
				return `<span class="jwt-number">${match}</span>`;
			}
		);
	}

	function formatDate(date: Date): string {
		return date.toLocaleString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZoneName: 'short'
		});
	}

	function formatRelativeTime(date: Date): string {
		const diffMs = date.getTime() - Date.now();
		const absDiffMs = Math.abs(diffMs);
		const isPast = diffMs < 0;

		const seconds = Math.floor(absDiffMs / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		let timeStr: string;
		if (days > 0) {
			timeStr = `${days}d ${hours % 24}h`;
		} else if (hours > 0) {
			timeStr = `${hours}h ${minutes % 60}m`;
		} else if (minutes > 0) {
			timeStr = `${minutes}m ${seconds % 60}s`;
		} else {
			timeStr = `${seconds}s`;
		}

		if (isPast) {
			return $t('ui.jwt.expired_ago', { time: timeStr }, `Expired ${timeStr} ago`);
		}
		return $t('ui.jwt.expires_in', { time: timeStr }, `Expires in ${timeStr}`);
	}

	function getExpiryStatusClass(data: { isExpired: boolean; isNotYetValid: boolean; expiresAt: Date | null }): string {
		if (data.isExpired) return 'status-expired';
		if (data.isNotYetValid) return 'status-warning';
		if (data.expiresAt === null) return 'status-no-expiry';
		return 'status-valid';
	}

	function getExpiryStatusLabel(data: { isExpired: boolean; isNotYetValid: boolean; expiresAt: Date | null }): string {
		if (data.isExpired) return $t('ui.jwt.status.expired', 'Expired');
		if (data.isNotYetValid) return $t('ui.jwt.status.not_yet_valid', 'Not yet valid');
		if (data.expiresAt === null) return $t('ui.jwt.status.no_expiry', 'No expiry');
		return $t('ui.jwt.status.valid', 'Valid');
	}

	function getErrorMessage(kind: string): string {
		switch (kind) {
			case 'empty':
				return $t('ui.jwt.error.empty', 'Paste a JWT token above to decode it.');
			case 'invalid_format':
				return $t('ui.jwt.error.invalid_format', 'Invalid JWT format: expected 3 dot-separated parts.');
			case 'invalid_base64':
				return $t('ui.jwt.error.invalid_base64', 'Failed to decode Base64URL encoding.');
			case 'invalid_json':
				return $t('ui.jwt.error.invalid_json', 'Decoded content is not valid JSON.');
			default:
				return $t('ui.jwt.error.invalid_format', 'Invalid JWT format.');
		}
	}

	function formatClaimValue(key: string, value: unknown): string {
		if ((key === 'exp' || key === 'iat' || key === 'nbf') && typeof value === 'number') {
			const date = new Date(value * 1000);
			return formatDate(date);
		}
		if (Array.isArray(value)) return value.join(', ');
		if (typeof value === 'object' && value !== null) return JSON.stringify(value);
		return String(value);
	}

	function getStandardClaims(payload: Record<string, unknown>): Array<{ key: string; label: string; value: string }> {
		const claimLabels: Record<string, string> = {
			iss: $t('ui.jwt.claim.iss', 'Issuer'),
			sub: $t('ui.jwt.claim.sub', 'Subject'),
			aud: $t('ui.jwt.claim.aud', 'Audience'),
			exp: $t('ui.jwt.claim.exp', 'Expires'),
			nbf: $t('ui.jwt.claim.nbf', 'Not Before'),
			iat: $t('ui.jwt.claim.iat', 'Issued At'),
			jti: $t('ui.jwt.claim.jti', 'JWT ID')
		};

		return Object.entries(claimLabels)
			.filter(([key]) => key in payload)
			.map(([key, label]) => ({
				key,
				label,
				value: formatClaimValue(key, payload[key])
			}));
	}

	function getCustomClaims(payload: Record<string, unknown>): Record<string, unknown> {
		const custom: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(payload)) {
			if (!STANDARD_CLAIM_KEYS.has(key)) {
				custom[key] = value;
			}
		}
		return custom;
	}

	function getButtonClass(): string {
		return 'inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]';
	}
</script>

<div class="flex h-full w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="encode"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<!-- Token Input Section -->
	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)]">
		<!-- Status bar -->
		<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)] px-[var(--space-3)] pt-[var(--space-3)]">
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				{#if decodeResult?.ok}
					{#if decodeResult.data.header.alg}
						<span class="rounded-[var(--radius-sm)] border border-[var(--status-info)] bg-[var(--status-info-bg)] px-[var(--space-2)] py-[1px] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--status-info)]">
							{decodeResult.data.header.alg}
						</span>
					{/if}
					{#if decodeResult.data.header.typ}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							{decodeResult.data.header.typ}
						</span>
					{/if}
					<span class="expiry-badge {getExpiryStatusClass(decodeResult.data)} rounded-[var(--radius-sm)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)]">
						{getExpiryStatusLabel(decodeResult.data)}
						{#if decodeResult.data.expiresAt !== null}
							· {formatRelativeTime(decodeResult.data.expiresAt)}
						{/if}
					</span>
				{:else if $input.trim() && decodeResult && !decodeResult.ok}
					<span class="rounded-[var(--radius-sm)] border border-[var(--border-error)] bg-[var(--status-invalid-bg)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--status-invalid)]">
						{$t('ui.jwt.error.invalid_format', 'Invalid token')}
					</span>
				{/if}
				{#if isProcessing}
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.actions.running', 'Running…')}</span>
				{/if}
				{#if processedByWorker}
					<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[length:var(--text-xs)] text-[var(--text-secondary)]">Worker</span>
				{/if}
			</div>
			<div class="flex items-center gap-[var(--space-2)]">
				{#if isWorkerEligible}
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.jwt.worker_active', { size: workerThresholdLabel }, 'Large input (>{size}) runs in Worker.')}
					</span>
				{/if}
				<button type="button" onclick={loadSample} class={getButtonClass()}>
					{$t('ui.actions.sample', 'Sample')}
				</button>
				<button type="button" onclick={clearInput} class={getButtonClass()}>
					<Eraser size={12} />
					{$t('ui.jwt.clear', 'Clear')}
				</button>
				<button type="button" onclick={copyJWT} class={getButtonClass()}>
					<Copy size={12} />
					{$t('ui.jwt.copy_jwt', 'Copy Token')}
				</button>
			</div>
		</div>

		<!-- JWT Textarea -->
		<div class="px-[var(--space-3)] pb-[var(--space-3)] pt-[var(--space-2)]">
			<div class="relative">
				<textarea
					value={$input}
					oninput={handleTokenInput}
					rows={3}
					class="w-full resize-none rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-focus)]"
					placeholder={$t('ui.jwt.input_placeholder', 'Paste your JWT token here (eyJ…)')}
					spellcheck="false"
					autocomplete="off"
				></textarea>
				<div class="mt-[var(--space-1)] text-right text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{formatByteSize($inputByteSize)}
				</div>
			</div>
		</div>
	</div>

	<!-- Decoded Output -->
	<div class="min-h-0 flex-1 overflow-auto">
		{#if decodeResult?.ok}
			<div class="grid h-full min-h-0 grid-cols-1 divide-y divide-[var(--border-default)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">

				<!-- HEADER -->
				<div class="flex min-h-[200px] flex-col lg:min-h-0">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-secondary)]">
							{$t('ui.jwt.section.header', 'Header')}
						</span>
						<button type="button" onclick={copyHeader} class={getButtonClass()}>
							<Copy size={12} />
							{$t('ui.jwt.copy_header', 'Copy')}
						</button>
					</div>
					<div class="flex-1 overflow-auto p-[var(--space-3)]">
						<pre class="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-[var(--leading-relaxed)]">{@html highlightJson(JSON.stringify(decodeResult.data.header, null, 2))}</pre>
					</div>
				</div>

				<!-- PAYLOAD -->
				<div class="flex min-h-[200px] flex-col lg:min-h-0">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-secondary)]">
							{$t('ui.jwt.section.payload', 'Payload')}
						</span>
						<button type="button" onclick={copyPayload} class={getButtonClass()}>
							<Copy size={12} />
							{$t('ui.jwt.copy_payload', 'Copy')}
						</button>
					</div>
					<div class="flex-1 overflow-auto">
						{#if getStandardClaims(decodeResult.data.payload as Record<string, unknown>).length > 0}
							<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]">
								<div class="mb-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-tertiary)]">
									{$t('ui.jwt.standard_claims', 'Standard Claims')}
								</div>
								<div class="flex flex-col gap-[var(--space-1)]">
									{#each getStandardClaims(decodeResult.data.payload as Record<string, unknown>) as claim}
										<div class="flex gap-[var(--space-2)]">
											<span class="w-[5rem] shrink-0 text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{claim.label}</span>
											<span class="truncate font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]">{claim.value}</span>
										</div>
									{/each}
								</div>
							</div>
						{/if}
						<div class="p-[var(--space-3)]">
							{#if Object.keys(getCustomClaims(decodeResult.data.payload as Record<string, unknown>)).length > 0}
								<div class="mb-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-tertiary)]">
									{$t('ui.jwt.all_claims', 'All Claims')}
								</div>
							{/if}
							<pre class="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-[var(--leading-relaxed)]">{@html highlightJson(JSON.stringify(decodeResult.data.payload, null, 2))}</pre>
						</div>
					</div>
				</div>

				<!-- SIGNATURE -->
				<div class="flex min-h-[200px] flex-col lg:min-h-0">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-secondary)]">
							{$t('ui.jwt.section.signature', 'Signature')}
						</span>
						<button type="button" onclick={copySignature} class={getButtonClass()}>
							<Copy size={12} />
							{$t('ui.jwt.copy_signature', 'Copy')}
						</button>
					</div>
					<div class="flex-1 overflow-auto p-[var(--space-3)]">
						<!-- Not verified warning -->
						<div class="mb-[var(--space-3)] flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--status-warning-bg)] bg-[var(--status-warning-bg)] px-[var(--space-3)] py-[var(--space-2)]">
							<ShieldAlert size={14} class="mt-[1px] shrink-0 text-[var(--color-warning)]" />
							<span class="text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
								{$t('ui.jwt.signature_note', 'Signatures are not verified. Use your server-side library to verify token authenticity.')}
							</span>
						</div>
						<!-- Raw signature -->
						<div class="break-all font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">
							{decodeResult.data.signature}
						</div>
					</div>
				</div>

			</div>
		{:else if $input.trim() && decodeResult && !decodeResult.ok}
			<!-- Error state -->
			<div class="flex h-full items-center justify-center p-[var(--space-8)]">
				<div class="max-w-[400px] text-center">
					<div class="mb-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--status-invalid)]">
						{$t('ui.jwt.error.invalid_format', 'Invalid Token')}
					</div>
					<p class="text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
						{getErrorMessage(decodeResult.error.kind)}
					</p>
					{#if decodeResult.error.kind !== 'empty'}
						<p class="mt-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{decodeResult.error.message}
						</p>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Empty state -->
			<div class="flex h-full items-center justify-center p-[var(--space-8)]">
				<div class="max-w-[340px] text-center">
					<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						{$t('ui.jwt.error.empty', 'Paste a JWT token above to decode it.')}
					</p>
					<button type="button" onclick={loadSample} class="mt-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-link)] hover:underline">
						{$t('ui.actions.load_sample', 'Load sample token')}
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>

<style>
	:global(.jwt-key) { color: var(--syntax-key); }
	:global(.jwt-string) { color: var(--syntax-string); }
	:global(.jwt-number) { color: var(--syntax-number); }
	:global(.jwt-bool) { color: var(--syntax-boolean); }
	:global(.jwt-null) { color: var(--syntax-null); }

	.expiry-badge.status-valid {
		border: 1px solid var(--status-valid);
		background: var(--status-valid-bg);
		color: var(--status-valid);
	}
	.expiry-badge.status-expired {
		border: 1px solid var(--status-invalid);
		background: var(--status-invalid-bg);
		color: var(--status-invalid);
	}
	.expiry-badge.status-warning {
		border: 1px solid var(--status-warning);
		background: var(--status-warning-bg);
		color: var(--status-warning);
	}
	.expiry-badge.status-no-expiry {
		border: 1px solid var(--border-default);
		background: var(--bg-base);
		color: var(--text-secondary);
	}
</style>
