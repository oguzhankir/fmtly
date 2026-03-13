import type { CategoryMeta } from './categories.js';
import type { FAQ, ToolDefinition } from './types.js';

export type TranslateFn = (key: string, fallback?: string) => string;

export function localizeCategoryMeta(category: CategoryMeta, t: TranslateFn): CategoryMeta {
	return {
		...category,
		displayName: t(`category.${category.slug}.display_name`, category.displayName),
		description: t(`category.${category.slug}.description`, category.description),
		primaryKeyword: t(`category.${category.slug}.primary_keyword`, category.primaryKeyword)
	};
}

function localizeFaqs(tool: ToolDefinition, t: TranslateFn): FAQ[] {
	return tool.faqs.map((faq, index) => ({
		question: t(`tool.${tool.id}.faq.${index}.question`, faq.question),
		answer: t(`tool.${tool.id}.faq.${index}.answer`, faq.answer)
	}));
}

function localizeUseCases(tool: ToolDefinition, t: TranslateFn): string[] {
	return tool.useCases.map((useCase, index) => t(`tool.${tool.id}.use_case.${index}`, useCase));
}

export function localizeToolDefinition(tool: ToolDefinition, t: TranslateFn): ToolDefinition {
	return {
		...tool,
		displayName: t(`tool.${tool.id}.display_name`, tool.displayName),
		tagline: t(`tool.${tool.id}.tagline`, tool.tagline),
		description: t(`tool.${tool.id}.description`, tool.description),
		primaryKeyword: t(`tool.${tool.id}.primary_keyword`, tool.primaryKeyword),
		metaTitle: t(`tool.${tool.id}.meta_title`, tool.metaTitle),
		metaDescription: t(`tool.${tool.id}.meta_description`, tool.metaDescription),
		operation: t(`tool.${tool.id}.operation`, tool.operation),
		faqs: localizeFaqs(tool, t),
		useCases: localizeUseCases(tool, t)
	};
}

export function localizeToolDefinitions(tools: ToolDefinition[], t: TranslateFn): ToolDefinition[] {
	return tools.map((tool) => localizeToolDefinition(tool, t));
}

export function localizeCategoryMetas(categories: CategoryMeta[], t: TranslateFn): CategoryMeta[] {
	return categories.map((category) => localizeCategoryMeta(category, t));
}
