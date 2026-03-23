<script lang="ts">
	import { FileUp, Shield, Zap, HardDrive } from 'lucide-svelte';
	import { t } from '$stores/language';

	let {
		accept = 'application/pdf',
		multiple = false,
		disabled = false,
		showPills = true,
		titleKey = 'ui.pdf.upload.drop_title',
		hintKey = 'ui.pdf.upload.drop_hint',
		browseKey = 'ui.pdf.upload.browse',
		onFiles
	}: {
		accept?: string;
		multiple?: boolean;
		disabled?: boolean;
		showPills?: boolean;
		titleKey?: string;
		hintKey?: string;
		browseKey?: string;
		onFiles: (files: File[]) => void;
	} = $props();

	let inputRef: HTMLInputElement | null = $state(null);
	let dragOver = $state(false);
	let dragDepth = $state(0);

	const titleId = $derived(`pdf-upload-${titleKey.replaceAll('.', '-')}`);

	function isPdfFile(file: File): boolean {
		return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
	}

	function emitList(list: FileList | null): void {
		if (!list || list.length === 0) {
			return;
		}
		const pdfFiles = Array.from(list).filter(isPdfFile);
		if (pdfFiles.length === 0) {
			return;
		}
		onFiles(multiple ? pdfFiles : pdfFiles.slice(0, 1));
	}

	function handleInputChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) {
			return;
		}
		emitList(target.files);
		target.value = '';
	}

	function handleOpenPicker(): void {
		if (disabled) {
			return;
		}
		inputRef?.click();
	}

	function handleDragEnter(event: DragEvent): void {
		event.preventDefault();
		if (disabled) {
			return;
		}
		dragDepth += 1;
		dragOver = true;
	}

	function handleDragLeave(event: DragEvent): void {
		event.preventDefault();
		dragDepth = Math.max(0, dragDepth - 1);
		if (dragDepth === 0) {
			dragOver = false;
		}
	}

	function handleDragOver(event: DragEvent): void {
		event.preventDefault();
		if (!disabled && event.dataTransfer) {
			event.dataTransfer.dropEffect = 'copy';
		}
	}

	function handleDrop(event: DragEvent): void {
		event.preventDefault();
		dragDepth = 0;
		dragOver = false;
		if (disabled) {
			return;
		}
		emitList(event.dataTransfer?.files ?? null);
	}
</script>

<input
	bind:this={inputRef}
	type="file"
	class="sr-only"
	aria-label={$t('ui.pdf.upload.input_aria', 'Choose PDF file')}
	tabindex="-1"
	{accept}
	{multiple}
	{disabled}
	onchange={handleInputChange}
/>

<div
	role="region"
	aria-labelledby={titleId}
	class="relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] duration-300 {dragOver
		? 'border-[var(--accent)] shadow-[var(--shadow-md)] ring-2 ring-[var(--accent-border)]'
		: 'hover:border-[var(--border-strong)]'}"
>
	<div
		class="pointer-events-none absolute inset-0 transition-opacity duration-300 {dragOver ? 'opacity-100' : 'opacity-70'}"
		aria-hidden="true"
		style="background: radial-gradient(ellipse 90% 70% at 50% -10%, var(--accent) 0%, transparent 55%); opacity: 0.12;"
	></div>
	<div
		class="pointer-events-none absolute inset-[1px] rounded-[calc(var(--radius-xl)-1px)] opacity-[0.4]"
		aria-hidden="true"
		style="background-image: linear-gradient(135deg, var(--border-subtle) 0%, transparent 42%, transparent 58%, var(--border-subtle) 100%);"
	></div>

	<div
		role="region"
		class="relative flex h-full min-h-0 flex-1 flex-col"
		aria-labelledby={titleId}
		ondragenter={handleDragEnter}
		ondragleave={handleDragLeave}
		ondragover={handleDragOver}
		ondrop={handleDrop}
	>
		<div class="flex flex-1 flex-col items-center justify-center gap-[var(--space-5)] px-[var(--space-5)] py-[var(--space-8)] text-center sm:px-[var(--space-8)]">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-[var(--shadow-sm)] transition-transform duration-300 {dragOver
					? 'scale-110'
					: ''}"
			>
				<FileUp size={30} strokeWidth={1.5} aria-hidden="true" />
			</div>

			<div class="flex max-w-[480px] flex-col gap-[var(--space-2)]">
				<p
					id={titleId}
					class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] tracking-tight text-[var(--text-primary)]"
				>
					{$t(titleKey, 'Drop PDF here or browse')}
				</p>
				<p class="text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
					{$t(hintKey, 'Your files stay in this browser — nothing is uploaded to a server.')}
				</p>
			</div>

			{#if showPills}
				<div class="flex flex-wrap items-center justify-center gap-[var(--space-2)]">
					<span
						class="inline-flex items-center gap-[var(--space-1)] rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]"
					>
						<Shield size={12} class="text-[var(--accent)]" aria-hidden="true" />
						{$t('ui.pdf.upload.pill_private', 'Private')}
					</span>
					<span
						class="inline-flex items-center gap-[var(--space-1)] rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]"
					>
						<Zap size={12} class="text-[var(--accent)]" aria-hidden="true" />
						{$t('ui.pdf.upload.pill_instant', 'Instant')}
					</span>
					<span
						class="inline-flex items-center gap-[var(--space-1)] rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]"
					>
						<HardDrive size={12} class="text-[var(--accent)]" aria-hidden="true" />
						{$t('ui.pdf.upload.pill_local', 'Local-only')}
					</span>
				</div>
			{/if}

			<div class="flex flex-col items-center gap-[var(--space-2)]">
				<button
					type="button"
					class="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-6)] py-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-50"
					{disabled}
					onclick={handleOpenPicker}
				>
					{$t(browseKey, 'Browse files')}
				</button>
				<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{$t('ui.pdf.upload.keyboard_hint', 'Enter or Space opens the file picker')}
				</p>
			</div>
		</div>
	</div>
</div>
