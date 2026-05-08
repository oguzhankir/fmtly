<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import { parseURL, type URLParserResult } from '$engines/web/index.js';
	import { input, initInput } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Check, Copy, Link2, Shield, ShieldOff, X } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	const SAMPLE_URL =
		'https://user:pass@api.example.com:8080/v2/search?q=hello+world&lang=en&page=2#results';

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let result = $state<URLParserResult>(parseURL(''));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		if ($input.length === 0) {
			input.set(SAMPLE_URL);
		}
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		result = parseURL($input);
	});

	function handleInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		input.set(target.value);
	}

	function loadSample(): void {
		input.set(SAMPLE_URL);
	}

	function clearInput(): void {
		input.set('');
	}

	async function copyField(value: string): Promise<void> {
		if (!value) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(value);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	async function copyAllAsJSON(): Promise<void> {
		if (!result || result.error || !result.href) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy'));
			return;
		}
		const data: Record<string, unknown> = {
			href: result.href,
			origin: result.origin,
			protocol: result.protocol,
			scheme: result.scheme,
			username: result.username || null,
			password: result.password || null,
			host: result.host,
			hostname: result.hostname,
			port: result.port || null,
			pathname: result.pathname,
			search: result.search || null,
			searchParams: Object.fromEntries(result.searchParams.map((p) => [p.key, p.value])),
			hash: result.hash || null,
			fragment: result.fragment || null
		};
		try {
			await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
			addToast('success', $t('ui.url_parser.toast.copied_json', 'Copied as JSON'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	let isEmpty = $derived($input.trim().length === 0);
	let isValid = $derived(!isEmpty && !result.error && result.href.length > 0);
	let isError = $derived(!isEmpty && (!!result.error || result.href.length === 0));
</script>

{#snippet fieldRow(label: string, value: string, dimmed = false)}
	<div class="group flex items-center gap-[var(--space-3)] rounded-[var(--radius-sm)] px-[var(--space-1)] py-[var(--space-1)] hover:bg-[var(--bg-surface-hover)]">
		<span class="w-[88px] shrink-0 text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{label}</span>
		<span
			class="min-w-0 flex-1 break-all font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] {dimmed
				? 'select-none text-[var(--text-tertiary)]'
				: 'text-[var(--text-primary)]'}"
		>
			{dimmed ? '—' : value}
		</span>
		{#if !dimmed}
			<button
				type="button"
				onclick={() => copyField(value)}
				title={$t('ui.actions.copy', 'Copy')}
				class="invisible inline-flex shrink-0 items-center rounded-[var(--radius-sm)] border border-[var(--border-default)] p-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-base)] group-hover:visible"
			>
				<Copy size={11} />
			</button>
		{/if}
	</div>
{/snippet}

{#snippet sectionHeader(label: string, badge: string | null = null)}
	<div class="mb-[var(--space-1)] flex items-center gap-[var(--space-2)]">
		<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-tertiary)]">
			{label}
		</span>
		{#if badge !== null}
			<span class="rounded-full border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[0.5px] text-[length:var(--text-xs)] tabular-nums text-[var(--text-tertiary)]">
				{badge}
			</span>
		{/if}
	</div>
{/snippet}

<div class="flex h-full min-h-0 w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="web"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="flex min-h-0 flex-1 flex-col px-[var(--space-3)] pb-[var(--space-4)] pt-0 sm:px-[var(--space-4)]">
		<div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]">

			<!-- Toolbar: URL input + status badges -->
			<div class="max-h-[min(44vh,420px)] shrink-0 overflow-x-hidden overflow-y-auto border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] sm:p-[var(--space-4)]">

				<!-- URL input row -->
				<div class="flex items-center gap-[var(--space-2)]">
					<div class="relative flex min-w-0 flex-1 items-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] transition-colors focus-within:border-[var(--accent)] focus-within:ring-1 focus-within:ring-[var(--accent-border)]">
						<Link2 size={14} class="ml-[var(--space-3)] shrink-0 text-[var(--text-tertiary)]" />
						<input
							type="text"
							value={$input}
							oninput={handleInput}
							placeholder={$t(
								'ui.url_parser.input_placeholder',
								'https://example.com/path?query=value#fragment'
							)}
							class="h-9 min-w-0 flex-1 bg-transparent px-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
							spellcheck="false"
							autocomplete="off"
							autocorrect="off"
							autocapitalize="off"
						/>
					</div>
					<button
						type="button"
						onclick={loadSample}
						class="inline-flex h-9 items-center rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.actions.sample', 'Sample')}
					</button>
					{#if $input.length > 0}
						<button
							type="button"
							onclick={clearInput}
							class="inline-flex h-9 items-center rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
						>
							{$t('ui.actions.clear', 'Clear')}
						</button>
					{/if}
				</div>

				<!-- Status badges -->
				{#if !isEmpty}
					<div class="mt-[var(--space-2)] flex flex-wrap items-center gap-[var(--space-2)]">
						{#if isValid}
							<span class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-success)] bg-[var(--success-dim)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--success)]">
								<Check size={11} strokeWidth={3} />
								{$t('ui.url_parser.valid', 'Valid URL')}
							</span>
							<span class="inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase text-[var(--text-accent)]">
								{result.scheme}
							</span>
							{#if result.isSecure}
								<span class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-success)] bg-[var(--success-dim)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] text-[var(--success)]">
									<Shield size={11} />
									{$t('ui.url_parser.secure', 'Secure')}
								</span>
							{:else}
								<span class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
									<ShieldOff size={11} />
									{$t('ui.url_parser.insecure', 'Not encrypted')}
								</span>
							{/if}
							{#if result.hasSearch}
								<span class="inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
									{result.paramCount}
									{result.paramCount === 1
										? $t('ui.url_parser.param_singular', 'param')
										: $t('ui.url_parser.param_plural', 'params')}
								</span>
							{/if}
						{:else if isError}
							<span class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-danger)]">
								<X size={11} strokeWidth={3} />
								{$t('ui.url_parser.invalid', 'Invalid URL')}
							</span>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Main: Results -->
			<div class="min-h-0 flex-1 overflow-y-auto">
				{#if isEmpty}
					<!-- Empty state -->
					<div class="flex h-full flex-col items-center justify-center gap-[var(--space-3)] p-[var(--space-8)] text-center text-[var(--text-tertiary)]">
						<Link2 size={32} class="opacity-30" />
						<p class="text-[length:var(--text-sm)]">
							{$t('ui.url_parser.hint', 'Paste a URL above to decompose its components')}
						</p>
					</div>
				{:else if isError}
					<!-- Error state -->
					<div class="p-[var(--space-4)]">
						<div class="rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-danger)]">
							{$t(
								'ui.url_parser.error.invalid_url',
								{ detail: result.error?.detail ?? '' },
								'Invalid URL: {detail}'
							)}
						</div>
					</div>
				{:else}
					<!-- Parsed results -->
					<div class="divide-y divide-[var(--border-default)]">

						<!-- Full URL -->
						<div class="p-[var(--space-4)]">
							{@render sectionHeader($t('ui.url_parser.section.full_url', 'Full URL'))}
							{@render fieldRow($t('ui.url_parser.field.href', 'href'), result.href)}
							{#if result.origin && result.origin !== 'null'}
								{@render fieldRow($t('ui.url_parser.field.origin', 'origin'), result.origin)}
							{/if}
						</div>

						<!-- Authority -->
						<div class="p-[var(--space-4)]">
							{@render sectionHeader($t('ui.url_parser.section.authority', 'Authority'))}
							{@render fieldRow($t('ui.url_parser.field.protocol', 'protocol'), result.protocol)}
							{@render fieldRow($t('ui.url_parser.field.host', 'host'), result.host)}
							{@render fieldRow($t('ui.url_parser.field.hostname', 'hostname'), result.hostname)}
							{@render fieldRow(
								$t('ui.url_parser.field.port', 'port'),
								result.port,
								!result.hasPort
							)}
						</div>

						<!-- Credentials (only if present) -->
						{#if result.hasAuth}
							<div class="p-[var(--space-4)]">
								{@render sectionHeader($t('ui.url_parser.section.credentials', 'Credentials'))}
								{#if result.username}
									{@render fieldRow($t('ui.url_parser.field.username', 'username'), result.username)}
								{/if}
								{#if result.password}
									{@render fieldRow(
										$t('ui.url_parser.field.password', 'password'),
										result.password
									)}
								{/if}
							</div>
						{/if}

						<!-- Path -->
						<div class="p-[var(--space-4)]">
							{@render sectionHeader($t('ui.url_parser.section.path', 'Path'))}
							{@render fieldRow(
								$t('ui.url_parser.field.pathname', 'pathname'),
								result.pathname,
								result.pathname === '/'
							)}
						</div>

						<!-- Query -->
						<div class="p-[var(--space-4)]">
							{@render sectionHeader(
								$t('ui.url_parser.section.query', 'Query'),
								result.hasSearch ? String(result.paramCount) : null
							)}
							{#if result.hasSearch}
								{@render fieldRow($t('ui.url_parser.field.search', 'search'), result.search)}
								<div class="mt-[var(--space-3)] overflow-x-auto rounded-[var(--radius-md)] border border-[var(--border-default)]">
									<table class="w-full min-w-0">
										<thead class="bg-[var(--bg-surface)]">
											<tr class="border-b border-[var(--border-default)]">
												<th class="w-9 px-[var(--space-3)] py-[var(--space-2)] text-left text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]"
													>#</th>
												<th class="px-[var(--space-3)] py-[var(--space-2)] text-left text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]"
													>{$t('ui.url_parser.param.key', 'Key')}</th>
												<th class="px-[var(--space-3)] py-[var(--space-2)] text-left text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]"
													>{$t('ui.url_parser.param.value', 'Value')}</th>
												<th class="w-10 px-[var(--space-2)] py-[var(--space-2)]"></th>
											</tr>
										</thead>
										<tbody>
											{#each result.searchParams as param}
												<tr class="group border-b border-[var(--border-default)] last:border-0 hover:bg-[var(--bg-surface-hover)]">
													<td class="px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] tabular-nums text-[var(--text-tertiary)]"
														>{param.index + 1}</td>
													<td class="max-w-[160px] truncate px-[var(--space-3)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]"
														>{param.key}</td>
													<td class="max-w-[240px] truncate px-[var(--space-3)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
														{#if param.value}
															{param.value}
														{:else}
															<span class="text-[var(--text-tertiary)]">{$t('ui.url_parser.empty_value', '(empty)')}</span>
														{/if}
													</td>
													<td class="px-[var(--space-2)] py-[var(--space-1)]">
														<button
															type="button"
															onclick={() => copyField(param.value)}
															title={$t('ui.actions.copy', 'Copy')}
															class="invisible inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--border-default)] p-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-base)] group-hover:visible"
														>
															<Copy size={11} />
														</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							{:else}
								<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
									{$t('ui.url_parser.no_params', 'No query parameters')}
								</p>
							{/if}
						</div>

						<!-- Fragment -->
						<div class="p-[var(--space-4)]">
							{@render sectionHeader($t('ui.url_parser.section.fragment', 'Fragment'))}
							{#if result.hasHash}
								{@render fieldRow($t('ui.url_parser.field.hash', 'hash'), result.hash)}
								{@render fieldRow($t('ui.url_parser.field.fragment', 'fragment'), result.fragment)}
							{:else}
								<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
									{$t('ui.url_parser.no_fragment', 'No fragment')}
								</p>
							{/if}
						</div>

						<!-- Copy all footer -->
						<div class="flex items-center justify-between p-[var(--space-3)]">
							<span class="text-[length:var(--text-xs)] tabular-nums text-[var(--text-tertiary)]">
								{$t('ui.url_parser.parsed_in', { ms: result.durationMs.toFixed(2) }, 'Parsed in {ms} ms')}
							</span>
							<button
								type="button"
								onclick={copyAllAsJSON}
								class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							>
								<Copy size={12} />
								{$t('ui.url_parser.copy_as_json', 'Copy all as JSON')}
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
