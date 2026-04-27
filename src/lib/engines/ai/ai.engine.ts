export const AI_TOKEN_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const PROMPT_OPTIMIZER_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const SYSTEM_PROMPT_BUILDER_WORKER_THRESHOLD_BYTES = 500 * 1024;

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

export type SystemPromptTemplateId =
	| 'custom'
	| 'code-assistant'
	| 'data-analyst'
	| 'translator'
	| 'customer-support';

export type SystemPromptOutputFormat = 'plain-text' | 'openai-json';

export type SystemPromptBuilderInput = {
	templateId: SystemPromptTemplateId;
	role: string;
	objective: string;
	context: string;
	constraints: string;
	examples: string;
	outputRequirements: string;
};

export type SystemPromptBuilderOptions = {
	outputFormat: SystemPromptOutputFormat;
	includeSafetyBoundaries: boolean;
	includeQualityChecklist: boolean;
	includeReasoningGuidance: boolean;
};

export type SystemPromptMessage = {
	role: 'system';
	content: string;
};

export type SystemPromptSection = {
	id:
		| 'identity'
		| 'objective'
		| 'context'
		| 'constraints'
		| 'examples'
		| 'output'
		| 'reasoning'
		| 'safety'
		| 'quality';
	title: string;
	content: string;
};

export type SystemPromptBuilderResult = {
	templateId: SystemPromptTemplateId;
	outputFormat: SystemPromptOutputFormat;
	promptText: string;
	output: string;
	messages: SystemPromptMessage[];
	sections: SystemPromptSection[];
	characterCount: number;
	byteCount: number;
	lineCount: number;
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

export type SystemPromptBuilderWorkerRequest = {
	id: number;
	input: SystemPromptBuilderInput;
	options?: Partial<SystemPromptBuilderOptions>;
};

export type SystemPromptBuilderWorkerResponse = {
	id: number;
	result?: SystemPromptBuilderResult;
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

export const SYSTEM_PROMPT_BUILDER_DEFAULT_INPUT: SystemPromptBuilderInput = {
	templateId: 'code-assistant',
	role: 'Senior software engineering assistant',
	objective:
		'Help developers understand, improve, debug, and ship production-quality software while preserving existing behavior.',
	context:
		'The user works in an existing codebase. Read the surrounding implementation first, follow local patterns, and keep edits focused.',
	constraints:
		'Do not invent APIs. Do not expose secrets. Ask for clarification only when the requested outcome is ambiguous or unsafe.',
	examples:
		'User: Refactor this parser for readability.\nAssistant: First inspect the parser and tests, identify behavior that must stay stable, then make the smallest clear change.',
	outputRequirements:
		'Lead with the result, cite changed files when relevant, call out tests run, and mention residual risks briefly.'
};

const DEFAULT_SYSTEM_PROMPT_OPTIONS: SystemPromptBuilderOptions = {
	outputFormat: 'plain-text',
	includeSafetyBoundaries: true,
	includeQualityChecklist: true,
	includeReasoningGuidance: true
};

const TEMPLATE_DEFAULTS: Record<
	SystemPromptTemplateId,
	Omit<SystemPromptBuilderInput, 'templateId'>
> = {
	custom: {
		role: 'Helpful AI assistant',
		objective: 'Complete the user request accurately and efficiently.',
		context: 'Adapt to the user-provided context and keep responses practical.',
		constraints: 'Be truthful, clear, and concise. Do not fabricate facts.',
		examples: '',
		outputRequirements: 'Provide a useful final answer in the format requested by the user.'
	},
	'code-assistant': {
		role: 'Senior software engineering assistant',
		objective:
			'Help developers understand, improve, debug, and ship production-quality software while preserving existing behavior.',
		context:
			'The user works in an existing codebase. Read the surrounding implementation first, follow local patterns, and keep edits focused.',
		constraints:
			'Do not invent APIs. Do not expose secrets. Ask for clarification only when the requested outcome is ambiguous or unsafe.',
		examples:
			'User: Refactor this parser for readability.\nAssistant: First inspect the parser and tests, identify behavior that must stay stable, then make the smallest clear change.',
		outputRequirements:
			'Lead with the result, cite changed files when relevant, call out tests run, and mention residual risks briefly.'
	},
	'data-analyst': {
		role: 'Careful data analyst',
		objective:
			'Turn messy datasets, metric requests, and business questions into clear analysis with reproducible reasoning.',
		context:
			'Prefer explicit assumptions, validate units and time windows, and separate observed data from interpretation.',
		constraints:
			'Do not overstate causality. Flag missing sample sizes, biased data, or unclear definitions before drawing conclusions.',
		examples:
			'User: Why did conversion drop last week?\nAssistant: Check event definitions, segment the change by channel and device, compare against historical baselines, then state confidence.',
		outputRequirements:
			'Return an executive summary, key findings, supporting evidence, caveats, and recommended next steps.'
	},
	translator: {
		role: 'Professional localization specialist',
		objective:
			'Translate content naturally while preserving meaning, tone, terminology, formatting, and audience intent.',
		context:
			'The user may provide source text, target locale, product context, glossary terms, or brand voice requirements.',
		constraints:
			'Do not translate code, variables, placeholders, or product names unless explicitly instructed. Preserve Markdown and ICU placeholders.',
		examples:
			'User: Translate this onboarding email to German.\nAssistant: Keep the friendly tone, preserve placeholders like {name}, and localize idioms instead of translating literally.',
		outputRequirements:
			'Return only the translation unless notes, alternatives, or glossary issues are requested.'
	},
	'customer-support': {
		role: 'Empathetic customer support assistant',
		objective:
			'Resolve customer issues with accurate, calm, and action-oriented guidance while protecting user privacy.',
		context:
			'The assistant may see tickets, product details, troubleshooting history, and policy constraints.',
		constraints:
			'Never promise refunds, legal outcomes, or unsupported fixes. Escalate security, billing, account access, and safety-sensitive cases.',
		examples:
			'User: The customer cannot access their account after changing phones.\nAssistant: Acknowledge the issue, verify account recovery prerequisites, provide safe recovery steps, and escalate if verification fails.',
		outputRequirements:
			'Respond with a concise customer-ready message, then include internal notes only when requested.'
	}
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

export function shouldUseSystemPromptBuilderWorker(input: SystemPromptBuilderInput): boolean {
	return (
		getByteCount(serializeSystemPromptBuilderInput(input)) >
		SYSTEM_PROMPT_BUILDER_WORKER_THRESHOLD_BYTES
	);
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

export async function buildSystemPrompt(
	input: SystemPromptBuilderInput,
	options: Partial<SystemPromptBuilderOptions> = {}
): Promise<SystemPromptBuilderResult> {
	const startedAt = now();
	const normalizedInput = normalizeSystemPromptInput(input);
	const mergedOptions: SystemPromptBuilderOptions = {
		...DEFAULT_SYSTEM_PROMPT_OPTIONS,
		...options
	};
	const sections = buildSystemPromptSections(normalizedInput, mergedOptions);
	const promptText = sections
		.map((section) => `## ${section.title}\n${section.content}`)
		.join('\n\n')
		.trim();
	const messages: SystemPromptMessage[] = [{ role: 'system', content: promptText }];
	const output =
		mergedOptions.outputFormat === 'openai-json' ? JSON.stringify(messages, null, 2) : promptText;

	return {
		templateId: normalizedInput.templateId,
		outputFormat: mergedOptions.outputFormat,
		promptText,
		output,
		messages,
		sections,
		characterCount: Array.from(output).length,
		byteCount: getByteCount(output),
		lineCount: output.length === 0 ? 0 : output.split(/\r?\n/u).length,
		durationMs: elapsed(startedAt)
	};
}

export function getModelProfile(modelId: AiModelId): AiModelProfile {
	return MODEL_PROFILES.find((profile) => profile.id === modelId) ?? MODEL_PROFILES[0];
}

export function getSystemPromptTemplateDefaults(
	templateId: SystemPromptTemplateId
): SystemPromptBuilderInput {
	const defaults = TEMPLATE_DEFAULTS[templateId] ?? TEMPLATE_DEFAULTS.custom;
	return {
		templateId,
		...defaults
	};
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

function normalizeSystemPromptInput(input: SystemPromptBuilderInput): SystemPromptBuilderInput {
	const templateId = TEMPLATE_DEFAULTS[input.templateId] ? input.templateId : 'custom';
	const defaults = TEMPLATE_DEFAULTS[templateId];

	return {
		templateId,
		role: normalizePromptField(input.role) || defaults.role,
		objective: normalizePromptField(input.objective) || defaults.objective,
		context: normalizePromptField(input.context),
		constraints: normalizePromptField(input.constraints),
		examples: normalizePromptField(input.examples),
		outputRequirements:
			normalizePromptField(input.outputRequirements) || defaults.outputRequirements
	};
}

function buildSystemPromptSections(
	input: SystemPromptBuilderInput,
	options: SystemPromptBuilderOptions
): SystemPromptSection[] {
	const sections: SystemPromptSection[] = [
		{
			id: 'identity',
			title: 'Role',
			content: input.role
		},
		{
			id: 'objective',
			title: 'Primary Objective',
			content: input.objective
		}
	];

	pushPromptSection(sections, 'context', 'Operating Context', input.context);
	pushPromptSection(sections, 'constraints', 'Constraints', input.constraints);
	pushPromptSection(sections, 'examples', 'Examples', input.examples);
	pushPromptSection(sections, 'output', 'Output Requirements', input.outputRequirements);

	if (options.includeReasoningGuidance) {
		pushPromptSection(
			sections,
			'reasoning',
			'Reasoning Guidance',
			'Think through the task before answering. Keep private reasoning concise, and expose only the conclusions, checks, and trade-offs the user needs.'
		);
	}

	if (options.includeSafetyBoundaries) {
		pushPromptSection(
			sections,
			'safety',
			'Safety and Boundaries',
			'Protect confidential information, refuse unsafe requests briefly, acknowledge uncertainty, and avoid inventing facts, citations, APIs, policies, or capabilities.'
		);
	}

	if (options.includeQualityChecklist) {
		pushPromptSection(
			sections,
			'quality',
			'Quality Checklist',
			'Before finalizing, verify that the answer follows the requested format, satisfies every explicit requirement, preserves important constraints, and names any meaningful limitation.'
		);
	}

	return sections;
}

function pushPromptSection(
	sections: SystemPromptSection[],
	id: SystemPromptSection['id'],
	title: string,
	content: string
): void {
	const normalizedContent = normalizePromptField(content);
	if (normalizedContent.length === 0) return;
	sections.push({ id, title, content: normalizedContent });
}

function normalizePromptField(input: string): string {
	return normalizeLineEndings(input)
		.split('\n')
		.map((line) => line.trimEnd())
		.join('\n')
		.trim();
}

function serializeSystemPromptBuilderInput(input: SystemPromptBuilderInput): string {
	return [
		input.templateId,
		input.role,
		input.objective,
		input.context,
		input.constraints,
		input.examples,
		input.outputRequirements
	].join('\n\n');
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
