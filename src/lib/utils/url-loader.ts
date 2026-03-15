export function normalizeRemoteTextUrl(url: string): string {
	if (url.includes('github.com') && url.includes('/blob/')) {
		return url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
	}

	return url;
}

export async function fetchRemoteText(url: string): Promise<string> {
	const response = await fetch(normalizeRemoteTextUrl(url));
	if (!response.ok) {
		throw new Error('Request failed');
	}

	return response.text();
}
