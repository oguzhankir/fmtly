/** Shared choice-chip styles for Encode / decode tool panels (aligned with crypto accent pattern). */
export function encodeChoiceButtonClass(active: boolean): string {
	return active
		? 'border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--text-primary)] shadow-[var(--shadow-sm)]'
		: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:bg-[var(--bg-surface-hover)]';
}
