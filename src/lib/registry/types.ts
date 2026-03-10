export type EngineType =
	| 'json'
	| 'xml'
	| 'yaml'
	| 'css'
	| 'html'
	| 'code'
	| 'encoder'
	| 'escaper'
	| 'generator'
	| 'diff'
	| 'toml'
	| 'csv'
	| 'diff'
	| 'escaper'
	| 'color'
	| 'text'
	| 'number'
	| 'crypto';

export type LayoutVariant = 'split' | 'single' | 'triple' | 'generator' | 'dual-input' | 'single-panel' | 'bidirectional';

export type ToolReference = {
	category: string;
	slug: string;
};

export type FAQ = {
	question: string;
	answer: string;
};

export type ToolDefinition = {
	id: string;
	category: string;
	slug: string;
	displayName: string;
	tagline: string;
	description: string;
	primaryKeyword: string;
	metaTitle: string;
	metaDescription: string;
	engine: EngineType;
	operation: string;
	layoutVariant: LayoutVariant;
	inputLanguage: string;
	outputLanguage: string;
	hasTreeView: boolean;
	relatedTools: ToolReference[];
	faqs: FAQ[];
	useCases: string[];
	sampleInput: string;
};

export type CategoryInfo = {
	category: string;
	toolCount: number;
};
