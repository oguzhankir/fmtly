import { buildReadmeMarkdown } from '$engines/generate/readme.js';
import { describe, expect, it } from 'vitest';

describe('readme template engine', () => {
	it('builds markdown with sections', () => {
		const md = buildReadmeMarkdown({
			title: 'My Lib',
			description: 'Does things.',
			install: 'pnpm add my-lib',
			usage: 'import x from "my-lib"',
			license: 'MIT',
			includeBadges: false,
			repoUser: '',
			repoName: ''
		});
		expect(md).toContain('# My Lib');
		expect(md).toContain('Does things.');
		expect(md).toContain('## Installation');
		expect(md).toContain('pnpm add my-lib');
		expect(md).toContain('## Usage');
		expect(md).toContain('## License');
		expect(md).toContain('MIT');
	});

	it('includes shields when badges enabled and repo set', () => {
		const md = buildReadmeMarkdown({
			title: 'T',
			description: '',
			install: '',
			usage: '',
			license: 'Apache-2.0',
			includeBadges: true,
			repoUser: 'acme',
			repoName: 'proj'
		});
		expect(md).toContain('img.shields.io/github/actions/workflow/status/acme/proj');
		expect(md).toContain('Apache-2.0');
	});
});
