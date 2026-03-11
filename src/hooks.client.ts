export function handleError({ error }: { error: unknown }): {
	message: string;
} {
	console.error('[fmtly] Unhandled error:', error);
	return {
		message: 'Something went wrong. Please refresh the page.'
	};
}
