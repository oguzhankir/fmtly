import type { TreeNode, TreeNodeType } from './types.js';

export function buildJSONTree(data: unknown): TreeNode[] {
	return [buildNode(data, '(root)', '', 0, '0')];
}

function getType(value: unknown): TreeNodeType {
	if (value === null) return 'null';
	if (Array.isArray(value)) return 'array';
	switch (typeof value) {
		case 'string':
			return 'string';
		case 'number':
			return 'number';
		case 'boolean':
			return 'boolean';
		case 'object':
			return 'object';
		default:
			return 'string';
	}
}

function buildNode(value: unknown, key: string, path: string, depth: number, id: string): TreeNode {
	const type = getType(value);

	if (type === 'object' && value !== null) {
		const obj = value as Record<string, unknown>;
		const keys = Object.keys(obj);
		const children = keys.map((k, i) =>
			buildNode(obj[k], k, path ? `${path}.${k}` : k, depth + 1, `${id}-${i}`)
		);
		return {
			id,
			key,
			value,
			type,
			depth,
			children,
			childCount: keys.length,
			path: path || '/'
		};
	}

	if (type === 'array') {
		const arr = value as unknown[];
		const children = arr.map((item, i) =>
			buildNode(item, String(i), `${path}[${i}]`, depth + 1, `${id}-${i}`)
		);
		return {
			id,
			key,
			value,
			type,
			depth,
			children,
			childCount: arr.length,
			path: path || '/'
		};
	}

	return {
		id,
		key,
		value,
		type,
		depth,
		children: [],
		childCount: 0,
		path: path || '/'
	};
}
