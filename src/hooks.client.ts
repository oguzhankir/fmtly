import { env } from '$env/dynamic/public';

function reportError(error: unknown): void {
	const dsn = env.PUBLIC_SENTRY_DSN;
	if (!dsn) return;

	const message = error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : undefined;

	fetch(dsn, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			exception: {
				values: [{ type: 'Error', value: message, stacktrace: stack }]
			},
			platform: 'javascript',
			timestamp: Date.now() / 1000
		})
	}).catch(() => {});
}

export function handleError({ error }: { error: unknown }): {
	message: string;
} {
	console.error('[fmtly] Unhandled error:', error);
	reportError(error);
	return {
		message: 'Something went wrong. Please refresh the page.'
	};
}
