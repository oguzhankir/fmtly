type TreeNodeType = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';

export interface TreeNode {
	id: string;
	key: string | number | null;
	value: unknown;
	type: TreeNodeType;
	depth: number;
	path: string;
	pathDot: string;
	pathBracket: string;
	isExpanded: boolean;
	childCount: number;
	preview: string;
	size: number;
	children: TreeNode[];
}

export interface BuildTreeOptions {
	initialExpandDepth?: number;
}

const DEFAULT_OPTIONS: Required<BuildTreeOptions> = {
	initialExpandDepth: 2
};

export function buildTree(value: unknown, options: BuildTreeOptions = {}): TreeNode[] {
	const resolved = { ...DEFAULT_OPTIONS, ...options };
	return [buildNode(value, null, 0, 'root', 'root', 'root', 'root', resolved.initialExpandDepth)];
}

export function flattenVisibleTree(nodes: TreeNode[]): TreeNode[] {
	const flat: TreeNode[] = [];

	function walk(node: TreeNode): void {
		flat.push(node);
		if (node.isExpanded) {
			for (const child of node.children) {
				walk(child);
			}
		}
	}

	for (const node of nodes) {
		walk(node);
	}

	return flat;
}

function buildNode(
	value: unknown,
	key: string | number | null,
	depth: number,
	id: string,
	path: string,
	pathDot: string,
	pathBracket: string,
	initialExpandDepth: number
): TreeNode {
	const type = getType(value);
	const children = buildChildren(value, depth, path, pathDot, pathBracket, id, initialExpandDepth);
	const childCount = children.length;

	return {
		id,
		key,
		value,
		type,
		depth,
		path,
		pathDot,
		pathBracket,
		isExpanded: childCount > 0 && depth < initialExpandDepth,
		childCount,
		preview: buildPreview(value, type, childCount),
		size: computeSize(value),
		children
	};
}

function buildChildren(
	value: unknown,
	depth: number,
	path: string,
	pathDot: string,
	pathBracket: string,
	parentId: string,
	initialExpandDepth: number
): TreeNode[] {
	if (Array.isArray(value)) {
		return value.map((entry, index) =>
			buildNode(
				entry,
				index,
				depth + 1,
				`${parentId}[${index}]`,
				`${path}[${index}]`,
				`${pathDot}.${index}`,
				`${pathBracket}[${index}]`,
				initialExpandDepth
			)
		);
	}

	if (value && typeof value === 'object') {
		return Object.entries(value).map(([entryKey, entryValue]) =>
			buildNode(
				entryValue,
				entryKey,
				depth + 1,
				`${parentId}.${entryKey}`,
				`${path}.${entryKey}`,
				`${pathDot}.${entryKey}`,
				`${pathBracket}[${JSON.stringify(entryKey)}]`,
				initialExpandDepth
			)
		);
	}

	return [];
}

function getType(value: unknown): TreeNodeType {
	if (value === null) {
		return 'null';
	}

	if (Array.isArray(value)) {
		return 'array';
	}

	switch (typeof value) {
		case 'string':
			return 'string';
		case 'number':
			return 'number';
		case 'boolean':
			return 'boolean';
		default:
			return 'object';
	}
}

function buildPreview(value: unknown, type: TreeNodeType, childCount: number): string {
	if (type === 'object') {
		return `{ ${childCount} ${childCount === 1 ? 'key' : 'keys'} }`;
	}

	if (type === 'array') {
		return `[ ${childCount} ${childCount === 1 ? 'item' : 'items'} ]`;
	}

	if (typeof value === 'string') {
		return value.length > 60 ? `${value.slice(0, 60)}...` : value;
	}

	return String(value);
}

function computeSize(value: unknown): number {
	return new TextEncoder().encode(JSON.stringify(value)).length;
}
