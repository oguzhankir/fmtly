module.exports = {
	ci: {
		collect: {
			staticDistDir: '.svelte-kit/cloudflare',
			url: [
				'http://localhost/index.html',
				'http://localhost/json/formatter/index.html',
				'http://localhost/json/validator/index.html',
				'http://localhost/yaml/to-json/index.html',
				'http://localhost/diff/json/index.html',
				'http://localhost/encode/base64/index.html'
			],
			numberOfRuns: 1
		},
		assert: {
			assertions: {
				'categories:performance': ['error', { minScore: 0.95 }],
				'categories:accessibility': ['error', { minScore: 0.95 }],
				'categories:best-practices': ['error', { minScore: 0.95 }],
				'categories:seo': ['error', { minScore: 0.95 }]
			}
		},
		upload: {
			target: 'temporary-public-storage'
		}
	}
};
