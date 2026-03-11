export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
		const action = url.searchParams.get('action');
		const target = url.searchParams.get('target');

		const corsHeaders = {
			'Access-Control-Allow-Origin': 'https://fmtly.dev',
			'Content-Type': 'application/json'
		};

		// Handle CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					...corsHeaders,
					'Access-Control-Allow-Methods': 'GET, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Max-Age': '86400'
				}
			});
		}

		if (!action || !target) {
			return json({ error: 'Missing params' }, 400, corsHeaders);
		}

		try {
			if (action === 'ip') {
				const res = await fetch(`https://ipapi.co/${encodeURIComponent(target)}/json/`);
				const data = await res.json();
				return new Response(JSON.stringify(data), { headers: corsHeaders });
			}

			if (action === 'dns') {
				const types = ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS', 'SOA'];
				const results: Record<string, unknown> = {};
				await Promise.all(
					types.map(async (type) => {
						try {
							const r = await fetch(
								`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(target)}&type=${type}`,
								{ headers: { Accept: 'application/dns-json' } }
							);
							results[type] = await r.json();
						} catch {
							results[type] = { Status: -1 };
						}
					})
				);
				return new Response(JSON.stringify(results), { headers: corsHeaders });
			}

			return json({ error: 'Unknown action' }, 400, corsHeaders);
		} catch (e) {
			return json({ error: 'Proxy error', detail: String(e) }, 500, corsHeaders);
		}

		function json(data: unknown, status, headers: Record<string, string>) {
			return new Response(JSON.stringify(data), { status, headers });
		}
	}
};
