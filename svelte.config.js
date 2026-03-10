import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$registry: 'src/lib/registry',
			'$registry/*': 'src/lib/registry/*',
			$engines: 'src/lib/engines',
			'$engines/*': 'src/lib/engines/*',
			$components: 'src/lib/components',
			'$components/*': 'src/lib/components/*',
			$stores: 'src/lib/stores',
			'$stores/*': 'src/lib/stores/*',
			$utils: 'src/lib/utils',
			'$utils/*': 'src/lib/utils/*'
		}
	}
};

export default config;
