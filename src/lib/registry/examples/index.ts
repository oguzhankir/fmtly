import { csvExamples } from './csv-examples.js';
import { jsonExamples } from './json-examples.js';
import { xmlExamples } from './xml-examples.js';
import { yamlExamples } from './yaml-examples.js';

export interface ExamplePage {
	slug: string;
	title: string;
	description: string;
	toolUrl: string; // e.g. '/json/formatter'
	toolName: string;
	format: string; // e.g. 'json', 'yaml', 'xml'
	content: string; // The example data (raw string)
	explanation: string; // 2-3 sentence explanation of this format
	useCases: string[]; // 3-5 bullet points
	relatedTools: string[]; // tool slugs
}

export const examples: ExamplePage[] = [
	...jsonExamples,
	...yamlExamples,
	...xmlExamples,
	...csvExamples
];
