import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['tests/unit/**/*.test.ts'],
		exclude: ['tests/e2e/**']
	},
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
