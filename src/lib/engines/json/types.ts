export type ParseError = {
	message: string;
	line: number;
	column: number;
	position: number;
	plainLanguageExplanation: string;
};

export type SourceMapPointer = {
	line: number;
	column: number;
	pos: number;
};

export type SourceMapEntry = {
	key?: SourceMapPointer;
	keyEnd?: SourceMapPointer;
	value: SourceMapPointer;
	valueEnd: SourceMapPointer;
};

export type SourceMap = Record<string, SourceMapEntry>;

export type ParseSuccess = {
	success: true;
	data: unknown;
	sourceMap: SourceMap;
};

export type ParseFailure = {
	success: false;
	error: ParseError;
};

export type ParseResult = ParseSuccess | ParseFailure;

export type FormatOptions = {
	indent: 2 | 4 | '\t';
};

export type FormatSuccess = {
	success: true;
	output: string;
};

export type FormatFailure = {
	success: false;
	error: ParseError;
};

export type FormatResult = FormatSuccess | FormatFailure;

export type RepairResult =
	| {
			success: true;
			output: string;
			changes: string[];
	  }
	| {
			success: false;
			error: ParseError;
	  };

export type JSONStats = {
	keyCount: number;
	valueCount: number;
	maxDepth: number;
	nodeCount: number;
	types: {
		strings: number;
		numbers: number;
		booleans: number;
		nulls: number;
		arrays: number;
		objects: number;
	};
	arrayLengths: { path: string; length: number }[];
	totalStringLength: number;
};

export type TreeNodeType = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';

export type TreeNode = {
	id: string;
	key: string;
	value: unknown;
	type: TreeNodeType;
	depth: number;
	children: TreeNode[];
	childCount: number;
	path: string;
};

export type WorkerRequest = {
	id: string;
	method: string;
	args: unknown[];
};

export type WorkerResponse = {
	id: string;
	result?: unknown;
	error?: string;
};
