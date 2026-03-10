export type {
	ParseResult,
	ParseError,
	ParseSuccess,
	ParseFailure,
	FormatOptions,
	FormatResult,
	FormatSuccess,
	FormatFailure,
	RepairResult,
	JSONStats,
	TreeNode,
	TreeNodeType,
	SourceMap,
	WorkerRequest,
	WorkerResponse
} from './types.js';

export { parseJSON, initParser } from './parser.js';
export { formatJSON, minifyJSON } from './formatter.js';
export { validateJSON } from './validator.js';
export type { ValidationResult } from './validator.js';
export { repairJSON } from './repairer.js';
export { sortJSONKeys } from './sorter.js';
export { computeJSONStats } from './statistics.js';
export { buildJSONTree } from './tree.js';

const SIZE_THRESHOLD = 500 * 1024;

export function shouldUseWorker(input: string): boolean {
	return new TextEncoder().encode(input).length > SIZE_THRESHOLD;
}
