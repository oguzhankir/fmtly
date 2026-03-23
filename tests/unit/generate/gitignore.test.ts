import { mergeGitignoreTemplates } from '$engines/generate/gitignore.js';
import { describe, expect, it } from 'vitest';

describe('gitignore merge engine', () => {
	it('merges selected templates with stable ordering', () => {
		const a = mergeGitignoreTemplates(['python', 'node']);
		const b = mergeGitignoreTemplates(['node', 'python']);
		expect(a).toBe(b);
		expect(a).toContain('node_modules/');
		expect(a).toContain('__pycache__/');
		expect(a).toContain('# --- node ---');
		expect(a).toContain('# --- python ---');
	});

	it('deduplicates keys', () => {
		const once = mergeGitignoreTemplates(['node']);
		const dup = mergeGitignoreTemplates(['node', 'node']);
		expect(once).toBe(dup);
	});
});
