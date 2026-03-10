import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$registry: resolve('./src/lib/registry'),
			$engines: resolve('./src/lib/engines'),
			$components: resolve('./src/lib/components'),
			$stores: resolve('./src/lib/stores'),
			$utils: resolve('./src/lib/utils')
		}
	}
});
