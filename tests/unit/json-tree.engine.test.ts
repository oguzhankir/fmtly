import { describe, expect, it } from 'vitest';
import { buildTree, flattenVisibleTree } from '../../src/lib/engines/json/tree.engine.js';

describe('json tree engine', () => {
	it('builds nodes with path metadata', () => {
		const tree = buildTree({ users: [{ id: 1 }] }, { initialExpandDepth: 2 });
		const root = tree[0];
		const users = root.children[0];
		const firstUser = users.children[0];
		const idNode = firstUser.children[0];

		expect(root.path).toBe('root');
		expect(users.pathDot).toBe('root.users');
		expect(firstUser.pathBracket).toBe('root["users"][0]');
		expect(idNode.path).toBe('root.users[0].id');
	});

	it('creates previews and subtree sizes', () => {
		const tree = buildTree({ meta: { total: 2 }, items: [1, 2] });
		const root = tree[0];

		expect(root.preview).toBe('{ 2 keys }');
		expect(root.size).toBeGreaterThan(0);
		expect(root.children[1].preview).toBe('[ 2 items ]');
	});

	it('flattens only expanded nodes', () => {
		const tree = buildTree({ a: { b: { c: 1 } } }, { initialExpandDepth: 1 });
		const visible = flattenVisibleTree(tree);

		expect(visible.map((node) => node.path)).toEqual(['root', 'root.a']);
	});
});
