export type EngineType =
	// ── Active ──
	| 'json'
	| 'xml'
	| 'yaml'
	| 'csv'
	| 'toml'
	| 'diff'
	// ── Backlog (add here when implemented) ──
	| 'encode'
	| 'text'
	| 'code'
	| 'ai'
	| 'crypto'
	| 'web'
	| 'network'
	| 'number'
	| 'color'
	| 'pdf'
	| 'image'
	| 'file'
	| 'qr'
	| 'generate'
	| 'a11y';

export type LayoutVariant =
	| 'split'
	| 'single'
	| 'triple'
	| 'dual-input'
	| 'single-panel'
	| 'bidirectional';

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
