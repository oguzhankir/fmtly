export const AI_TOKEN_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const PROMPT_OPTIMIZER_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type AiModelId =
	| 'gpt-4o'
	| 'claude-3-5-sonnet'
	| 'llama-3'
	| 'gemini-1-5-pro'
	| 'mistral-large';

export type AiTokenizerAccuracy = 'exact' | 'estimated';

export type AiModelProfile = {
	id: AiModelId;
	displayName: string;
	provider: string;
	contextWindow: number;
	inputCostPerMillionTokens: number;
	accuracy: AiTokenizerAccuracy;
	calibrationMultiplier: number;
	charactersPerToken: number;
};

export type AiTokenCounterResult = {
	modelId: AiModelId;
	tokenCount: number;
	wordCount: number;
	characterCount: number;
	characterNoSpaceCount: number;
	byteCount: number;
	lineCount: number;
	tokensPerWord: number;
	estimatedCostUsd: number;
	contextUsagePercent: number;
	accuracy: AiTokenizerAccuracy;
	durationMs: number;
};

export type PromptOptimizationOptions = {
	removeFillerWords: boolean;
	compressWhitespace: boolean;
	simplifyMarkdown: boolean;
	abbreviateKnownPatterns: boolean;
};

export type PromptOptimizationChange = {
	type: 'removed_filler' | 'compressed_whitespace' | 'simplified_markdown' | 'abbreviated_patterns';
	count: number;
};

export type PromptOptimizationResult = {
	modelId: AiModelId;
	originalText: string;
	optimizedText: string;
	beforeTokenCount: number;
	afterTokenCount: number;
	savedTokens: number;
	savingsPercent: number;
	estimatedCostSavedUsd: number;
	charactersSaved: number;
	changes: PromptOptimizationChange[];
	durationMs: number;
};

export type AiTokenCounterWorkerRequest = {
	id: number;
	input: string;
	selectedModelId: AiModelId;
};

export type AiTokenCounterWorkerResponse = {
	id: number;
	result?: AiTokenCounterResult;
	error?: string;
};

export type PromptOptimizerWorkerRequest = {
	id: number;
	input: string;
	selectedModelId: AiModelId;
	options?: Partial<PromptOptimizationOptions>;
};

export type PromptOptimizerWorkerResponse = {
	id: number;
	result?: PromptOptimizationResult;
	error?: string;
};

type GptTokenizerModule = {
	countTokens: (input: string, options?: GptEncodeOptions) => number;
};

type GptEncodeOptions = {
	allowedSpecial?: Set<string> | 'all';
	disallowedSpecial?: Set<string> | 'all';
};

type TextStats = {
	words: number;
	characters: number;
	charactersNoSpaces: number;
	bytes: number;
	lines: number;
	cjkCharacters: number;
	symbolCharacters: number;
	punctuationCharacters: number;
	codeSignalScore: number;
};

type Segment = {
	text: string;
	isCodeFence: boolean;
};

const WORD_PATTERN = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
const CJK_PATTERN = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu;
const SYMBOL_PATTERN = /[\p{Extended_Pictographic}\p{S}\p{So}]/gu;
const PUNCTUATION_PATTERN = /[\p{P}]/gu;
const CODE_SIGNAL_PATTERN =
	/[{}[\]();=<>]|=>|::|\b(?:const|let|var|function|class|interface|type|return|import|export)\b/g;

export const MODEL_PROFILES: AiModelProfile[] = [
	{
		id: 'gpt-4o',
		displayName: 'GPT-4o',
		provider: 'OpenAI',
		contextWindow: 128_000,
		inputCostPerMillionTokens: 2.5,
		accuracy: 'exact',
		calibrationMultiplier: 1,
		charactersPerToken: 3.85
	},
	{
		id: 'claude-3-5-sonnet',
		displayName: 'Claude 3.5 Sonnet',
		provider: 'Anthropic',
		contextWindow: 200_000,
		inputCostPerMillionTokens: 3,
		accuracy: 'estimated',
		calibrationMultiplier: 1.03,
		charactersPerToken: 3.9
	},
	{
		id: 'llama-3',
		displayName: 'Llama 3',
		provider: 'Meta',
		contextWindow: 128_000,
		inputCostPerMillionTokens: 0.59,
		accuracy: 'estimated',
		calibrationMultiplier: 1.12,
		charactersPerToken: 3.55
	},
	{
		id: 'gemini-1-5-pro',
		displayName: 'Gemini 1.5 Pro',
		provider: 'Google',
		contextWindow: 1_000_000,
		inputCostPerMillionTokens: 1.25,
		accuracy: 'estimated',
		calibrationMultiplier: 0.98,
		charactersPerToken: 4
	},
	{
		id: 'mistral-large',
		displayName: 'Mistral Large',
		provider: 'Mistral AI',
		contextWindow: 128_000,
		inputCostPerMillionTokens: 2,
		accuracy: 'estimated',
		calibrationMultiplier: 1.08,
		charactersPerToken: 3.7
	}
];

export const TOKEN_COUNTER_DEFAULT_TEXT = `System: You are a precise coding assistant.

User: Refactor this Svelte component for readability, keep behavior unchanged, and explain the risky parts before editing.

Context:
- The app runs fully in the browser.
- Large inputs must move to a Web Worker.
- Keep translations complete for every locale.`;

export const PROMPT_OPTIMIZER_DEFAULT_TEXT = `Please carefully analyze the following code and make sure to explain in detail what is going on. I would like you to identify any possible bugs, performance issues, and readability problems.

It is very important that you preserve the existing behavior and do not introduce any unnecessary abstractions. In order to make the review useful, please provide concrete examples and recommendations.

## Output requirements

- Please include a concise summary.
- Please include the highest priority fixes first.
- Please include tests that should be added if applicable.`;

const DEFAULT_PROMPT_OPTIONS: PromptOptimizationOptions = {
	removeFillerWords: true,
	compressWhitespace: true,
	simplifyMarkdown: true,
	abbreviateKnownPatterns: false
};

const FILLER_REPLACEMENTS: Array<[RegExp, string]> = [
	[/\bplease\s+/giu, ''],
	[/\bkindly\s+/giu, ''],
	[/\bi would like you to\s+/giu, ''],
	[/\bi want you to\s+/giu, ''],
	[/\bcan you\s+/giu, ''],
	[/\bcould you\s+/giu, ''],
	[/\bmake sure to\s+/giu, ''],
	[/\bit is very important that\s+/giu, ''],
	[/\bit is important that\s+/giu, ''],
	[/\bin order to\s+/giu, 'to '],
	[/\bas much as possible\b/giu, ''],
	[/\bbasically\b/giu, ''],
	[/\bactually\b/giu, ''],
	[/\breally\b/giu, ''],
	[/\bvery\s+/giu, '']
];

const ABBREVIATION_REPLACEMENTS: Array<[RegExp, string]> = [
	[/\bfor example\b/giu, 'e.g.'],
	[/\bthat is\b/giu, 'i.e.'],
	[/\bversus\b/giu, 'vs.'],
	[/\bapproximately\b/giu, 'approx.'],
	[/\bmaximum\b/giu, 'max'],
	[/\bminimum\b/giu, 'min'],
	[/\bconfiguration\b/giu, 'config'],
	[/\bdocumentation\b/giu, 'docs'],
	[/\bapplication programming interface\b/giu, 'API'],
	[/\bartificial intelligence\b/giu, 'AI'],
	[/\blarge language model\b/giu, 'LLM']
];

export function shouldUseAiTokenWorker(input: string): boolean {
	return getByteCount(input) > AI_TOKEN_WORKER_THRESHOLD_BYTES;
}

export function shouldUsePromptOptimizerWorker(input: string): boolean {
	return getByteCount(input) > PROMPT_OPTIMIZER_WORKER_THRESHOLD_BYTES;
}

export async function analyzeAiTokens(
	input: string,
	selectedModelId: AiModelId
): Promise<AiTokenCounterResult> {
	const startedAt = now();
	const profile = getModelProfile(selectedModelId);
	const stats = collectTextStats(input);
	const tokenCount =
		profile.id === 'gpt-4o'
			? await countGpt4oTokens(input)
			: estimateCalibratedTokens(input, profile, stats);

	return {
		modelId: profile.id,
		tokenCount,
		wordCount: stats.words,
		characterCount: stats.characters,
		characterNoSpaceCount: stats.charactersNoSpaces,
		byteCount: stats.bytes,
		lineCount: stats.lines,
		tokensPerWord: stats.words > 0 ? tokenCount / stats.words : 0,
		estimatedCostUsd: estimateInputCost(tokenCount, profile),
		contextUsagePercent: profile.contextWindow > 0 ? (tokenCount / profile.contextWindow) * 100 : 0,
		accuracy: profile.accuracy,
		durationMs: elapsed(startedAt)
	};
}

export async function optimizePrompt(
	input: string,
	selectedModelId: AiModelId,
	options: Partial<PromptOptimizationOptions> = {}
): Promise<PromptOptimizationResult> {
	const startedAt = now();
	const mergedOptions: PromptOptimizationOptions = { ...DEFAULT_PROMPT_OPTIONS, ...options };
	const before = await analyzeAiTokens(input, selectedModelId);
	const { text: optimizedText, changes } = applyPromptOptimizations(input, mergedOptions);
	const after = await analyzeAiTokens(optimizedText, selectedModelId);
	const savedTokens = Math.max(0, before.tokenCount - after.tokenCount);

	return {
		modelId: selectedModelId,
		originalText: input,
		optimizedText,
		beforeTokenCount: before.tokenCount,
		afterTokenCount: after.tokenCount,
		savedTokens,
		savingsPercent: before.tokenCount > 0 ? (savedTokens / before.tokenCount) * 100 : 0,
		estimatedCostSavedUsd: Math.max(0, before.estimatedCostUsd - after.estimatedCostUsd),
		charactersSaved: Math.max(0, input.length - optimizedText.length),
		changes,
		durationMs: elapsed(startedAt)
	};
}

export function getModelProfile(modelId: AiModelId): AiModelProfile {
	return MODEL_PROFILES.find((profile) => profile.id === modelId) ?? MODEL_PROFILES[0];
}

function collectTextStats(input: string): TextStats {
	const words = countMatches(input, WORD_PATTERN);
	const characters = Array.from(input).length;
	const charactersNoSpaces = Array.from(input.replace(/\s/gu, '')).length;

	return {
		words,
		characters,
		charactersNoSpaces,
		bytes: getByteCount(input),
		lines: input.length === 0 ? 0 : input.split(/\r?\n/u).length,
		cjkCharacters: countMatches(input, CJK_PATTERN),
		symbolCharacters: countMatches(input, SYMBOL_PATTERN),
		punctuationCharacters: countMatches(input, PUNCTUATION_PATTERN),
		codeSignalScore: countMatches(input, CODE_SIGNAL_PATTERN)
	};
}

async function countGpt4oTokens(input: string): Promise<number> {
	if (input.length === 0) return 0;

	const tokenizer = (await import('gpt-tokenizer/model/gpt-4o')) as GptTokenizerModule;
	return tokenizer.countTokens(input, { disallowedSpecial: new Set<string>() });
}

function estimateCalibratedTokens(
	input: string,
	profile: AiModelProfile,
	stats: TextStats
): number {
	if (input.length === 0) return 0;

	const wordEstimate = stats.words * 1.32;
	const characterEstimate = stats.charactersNoSpaces / profile.charactersPerToken;
	const structureEstimate =
		stats.punctuationCharacters * 0.18 + stats.symbolCharacters * 0.65 + stats.cjkCharacters * 0.95;
	const codeEstimate = stats.codeSignalScore * 0.24;
	const lineEstimate = Math.max(0, stats.lines - 1) * 0.12;
	const rawEstimate =
		Math.max(wordEstimate, characterEstimate) + structureEstimate + codeEstimate + lineEstimate;

	return Math.max(1, Math.round(rawEstimate * profile.calibrationMultiplier));
}

function estimateInputCost(tokenCount: number, profile: AiModelProfile): number {
	return (tokenCount / 1_000_000) * profile.inputCostPerMillionTokens;
}

function applyPromptOptimizations(
	input: string,
	options: PromptOptimizationOptions
): { text: string; changes: PromptOptimizationChange[] } {
	let nextText = normalizeLineEndings(input);
	const changes: PromptOptimizationChange[] = [];

	if (options.removeFillerWords) {
		const result = replaceOutsideCodeFences(nextText, FILLER_REPLACEMENTS);
		nextText = result.text;
		pushChange(changes, 'removed_filler', result.count);
	}

	if (options.simplifyMarkdown) {
		const result = simplifyMarkdownOutsideCodeFences(nextText);
		nextText = result.text;
		pushChange(changes, 'simplified_markdown', result.count);
	}

	if (options.abbreviateKnownPatterns) {
		const result = replaceOutsideCodeFences(nextText, ABBREVIATION_REPLACEMENTS);
		nextText = result.text;
		pushChange(changes, 'abbreviated_patterns', result.count);
	}

	if (options.compressWhitespace) {
		const result = compressWhitespaceOutsideCodeFences(nextText);
		nextText = result.text;
		pushChange(changes, 'compressed_whitespace', result.count);
	}

	return {
		text: nextText.trim(),
		changes
	};
}

function replaceOutsideCodeFences(
	input: string,
	replacements: Array<[RegExp, string]>
): { text: string; count: number } {
	let replacementCount = 0;
	const segments = splitCodeFenceSegments(input);
	const text = segments
		.map((segment) => {
			if (segment.isCodeFence) return segment.text;
			let nextText = segment.text;
			for (const [pattern, replacement] of replacements) {
				nextText = nextText.replace(pattern, () => {
					replacementCount += 1;
					return replacement;
				});
			}
			return nextText;
		})
		.join('');

	return { text, count: replacementCount };
}

function simplifyMarkdownOutsideCodeFences(input: string): { text: string; count: number } {
	let changeCount = 0;
	const segments = splitCodeFenceSegments(input);
	const text = segments
		.map((segment) => {
			if (segment.isCodeFence) return segment.text;
			return segment.text
				.replace(/^\s{0,3}#{1,6}\s+/gmu, () => {
					changeCount += 1;
					return '';
				})
				.replace(/^\s{0,3}>\s?/gmu, () => {
					changeCount += 1;
					return '';
				})
				.replace(/\*\*([^*\n]+)\*\*/gu, (_match: string, content: string) => {
					changeCount += 1;
					return content;
				})
				.replace(/__([^_\n]+)__/gu, (_match: string, content: string) => {
					changeCount += 1;
					return content;
				})
				.replace(/^\s{0,3}[-*_]{3,}\s*$/gmu, () => {
					changeCount += 1;
					return '';
				});
		})
		.join('');

	return { text, count: changeCount };
}

function compressWhitespaceOutsideCodeFences(input: string): { text: string; count: number } {
	let changeCount = 0;
	const segments = splitCodeFenceSegments(input);
	const text = segments
		.map((segment) => {
			if (segment.isCodeFence) return segment.text;
			return segment.text
				.replace(/[ \t]{2,}/gu, (match) => {
					changeCount += match.length - 1;
					return ' ';
				})
				.replace(/[ \t]+$/gmu, (match) => {
					changeCount += match.length;
					return '';
				})
				.replace(/\n{3,}/gu, (match) => {
					changeCount += match.length - 2;
					return '\n\n';
				})
				.replace(/^\s+|\s+$/gu, (match) => {
					changeCount += match.length;
					return '';
				});
		})
		.join('');

	return { text, count: changeCount };
}

function splitCodeFenceSegments(input: string): Segment[] {
	const lines = input.split(/(\r?\n)/u);
	const segments: Segment[] = [];
	let current = '';
	let isCodeFence = false;

	for (let index = 0; index < lines.length; index += 2) {
		const line = lines[index] ?? '';
		const newline = lines[index + 1] ?? '';
		const fullLine = `${line}${newline}`;

		if (/^\s*```/u.test(line)) {
			if (current.length > 0) {
				segments.push({ text: current, isCodeFence });
				current = '';
			}
			segments.push({ text: fullLine, isCodeFence: true });
			isCodeFence = !isCodeFence;
			continue;
		}

		current += fullLine;
	}

	if (current.length > 0) {
		segments.push({ text: current, isCodeFence });
	}

	return segments;
}

function pushChange(
	changes: PromptOptimizationChange[],
	type: PromptOptimizationChange['type'],
	count: number
): void {
	if (count <= 0) return;
	changes.push({ type, count });
}

function normalizeLineEndings(input: string): string {
	return input.replace(/\r\n?/gu, '\n');
}

function countMatches(input: string, pattern: RegExp): number {
	const matches = input.match(pattern);
	return matches?.length ?? 0;
}

function getByteCount(input: string): number {
	return new TextEncoder().encode(input).byteLength;
}

function now(): number {
	return globalThis.performance?.now() ?? Date.now();
}

function elapsed(startedAt: number): number {
	return Math.max(0, now() - startedAt);
}
