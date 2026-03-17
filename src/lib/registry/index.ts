import { csvTools } from './tools/csv.tools.js';
import { jsonTools } from './tools/json.tools.js';
import { textTools } from './tools/text.tools.js';
import { tomlTools } from './tools/toml.tools.js';
import { xmlTools } from './tools/xml.tools.js';
import { yamlTools } from './tools/yaml.tools.js';
import type { CategoryInfo, ToolDefinition } from './types.js';

const allTools: ToolDefinition[] = [
	...jsonTools,
	...yamlTools,
	...csvTools,
	...xmlTools,
	...tomlTools,
	...textTools
];

export function getAllTools(): ToolDefinition[] {
	return allTools;
}

export function getTool(category: string, slug: string): ToolDefinition | undefined {
	return allTools.find((tool) => tool.category === category && tool.slug === slug);
}

export function getToolsByCategory(category: string): ToolDefinition[] {
	return allTools.filter((tool) => tool.category === category);
}

export function getCategories(): CategoryInfo[] {
	const categoryMap = new Map<string, number>();

	for (const tool of allTools) {
		const count = categoryMap.get(tool.category) ?? 0;
		categoryMap.set(tool.category, count + 1);
	}

	const categories: CategoryInfo[] = [];

	for (const [category, toolCount] of categoryMap) {
		categories.push({ category, toolCount });
	}

	return categories;
}
