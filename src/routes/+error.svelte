<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-[var(--space-6)]">
	<div class="text-center">
		<h1
			class="mb-[var(--space-3)] text-[length:var(--text-3xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
		>
			{page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
		</h1>
		<p
			class="mb-[var(--space-6)] max-w-[480px] text-[length:var(--text-base)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
		>
			{page.status === 404
				? 'The page you are looking for does not exist or has been moved.'
				: page.error?.message ?? 'Something went wrong. Please refresh the page.'}
		</p>
		<a
			href="/"
			class="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--bg-accent)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-on-accent)] transition-colors hover:bg-[var(--bg-accent-hover)]"
		>
			Back to Home
		</a>
	</div>
</div>
