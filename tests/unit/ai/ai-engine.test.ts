import { describe, expect, it } from 'vitest';
import {
	AI_TOKEN_WORKER_THRESHOLD_BYTES,
	analyzeAiTokens,
	optimizePrompt,
	shouldUseAiTokenWorker,
	shouldUsePromptOptimizerWorker
} from '../../../src/lib/engines/ai/index.js';
import { getTool, getToolsByCategory } from '../../../src/lib/registry/index.js';

describe('AI token counter engine', () => {
	it('counts GPT-4o tokens with the dynamic tokenizer', async () => {
		const result = await analyzeAiTokens('Hello world', 'gpt-4o');

		expect(result.modelId).toBe('gpt-4o');
		expect(result.tokenCount).toBeGreaterThan(0);
		expect(result.wordCount).toBe(2);
		expect(result.accuracy).toBe('exact');
		expect(result.estimatedCostUsd).toBeGreaterThan(0);
	});

	it('estimates non-OpenAI model families without failing', async () => {
		const result = await analyzeAiTokens(
			'Summarize this API response as JSON.',
			'claude-3-5-sonnet'
		);

		expect(result.modelId).toBe('claude-3-5-sonnet');
		expect(result.tokenCount).toBeGreaterThan(0);
		expect(result.accuracy).toBe('estimated');
		expect(result.tokensPerWord).toBeGreaterThan(0);
	});

	it('uses workers only above the 500KB threshold', () => {
		expect(shouldUseAiTokenWorker('a'.repeat(16 * 1024))).toBe(false);
		expect(shouldUsePromptOptimizerWorker('a'.repeat(16 * 1024))).toBe(false);
		expect(shouldUseAiTokenWorker('a'.repeat(AI_TOKEN_WORKER_THRESHOLD_BYTES + 1))).toBe(true);
		expect(shouldUsePromptOptimizerWorker('a'.repeat(AI_TOKEN_WORKER_THRESHOLD_BYTES + 1))).toBe(
			true
		);
	});
});

describe('Prompt token optimizer engine', () => {
	it('reduces filler-heavy prompts while preserving the core request', async () => {
		const input =
			'Please carefully analyze this code and make sure to explain in detail what is going on. In order to help me, please include tests.';
		const result = await optimizePrompt(input, 'gpt-4o');

		expect(result.optimizedText).toContain('analyze this code');
		expect(result.optimizedText).toContain('include tests');
		expect(result.afterTokenCount).toBeLessThanOrEqual(result.beforeTokenCount);
		expect(result.savedTokens).toBeGreaterThanOrEqual(0);
		expect(result.savingsPercent).toBeGreaterThanOrEqual(0);
		expect(result.changes.length).toBeGreaterThan(0);
	});

	it('can abbreviate known AI prompt phrases when enabled', async () => {
		const result = await optimizePrompt(
			'Use a large language model for example in documentation.',
			'gpt-4o',
			{
				abbreviateKnownPatterns: true
			}
		);

		expect(result.optimizedText).toContain('LLM');
		expect(result.optimizedText).toContain('e.g.');
		expect(result.optimizedText).toContain('docs');
	});
});

describe('AI tool registry', () => {
	it('registers both AI tools', () => {
		expect(getTool('ai', 'token-counter')?.id).toBe('ai-token-counter');
		expect(getTool('ai', 'token-optimizer')?.id).toBe('ai-token-optimizer');
		expect(getToolsByCategory('ai')).toHaveLength(2);
	});
});
