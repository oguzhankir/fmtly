<script lang="ts">
	import { page } from '$app/state';
	import { t } from '$lib/stores/language';
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-[var(--space-6)]">
	<div class="text-center">
		<h1
			class="mb-[var(--space-3)] text-[length:var(--text-3xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
		>
			{page.status === 404 ? $t('ui.error.page_not_found', 'Page Not Found') : $t('ui.error.something_went_wrong', 'Something Went Wrong')}
		</h1>
		<p
			class="mb-[var(--space-6)] max-w-[480px] text-[length:var(--text-base)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
		>
			{page.status === 404
				? $t('ui.error.page_not_found_description', 'The page you are looking for does not exist or has been moved.')
				: page.error?.message ?? $t('ui.error.something_went_wrong_description', 'Something went wrong. Please refresh the page.')}
		</p>
		<a
			href="/"
			class="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--bg-accent)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-on-accent)] transition-colors hover:bg-[var(--bg-accent-hover)]"
		>
			{$t('ui.error.back_to_home', 'Back to Home')}
		</a>
	</div>
</div>
