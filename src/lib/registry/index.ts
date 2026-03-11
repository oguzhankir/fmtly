import { csvTools } from './tools/csv.tools.js';
import { diffTools } from './tools/diff.tools.js';
import { encodeTools } from './tools/encode.tools.js';
import { escapeTools } from './tools/escape.tools.js';
import { jsonTools } from './tools/json.tools.js';
import { numberTools } from './tools/number.tools.js';
import { textTools } from './tools/text.tools.js';
import { tomlTools } from './tools/toml.tools.js';
import { xmlTools } from './tools/xml.tools.js';
import { yamlTools } from './tools/yaml.tools.js';
import { colorTools } from './tools/color.tools.js';
import { cryptoTools } from './tools/crypto.tools.js';
import { webTools } from './tools/web.tools.js';
import { codeTools } from './tools/code.tools.js';
import { pdfTools } from './tools/pdf.tools.js';
import { imageTools } from './tools/image.tools.js';
import { fileTools } from './tools/file.tools.js';
import { qrTools } from './tools/qr.tools.js';
import { generateTools } from './tools/generate.tools.js';
import type { CategoryInfo, ToolDefinition } from './types.js';

const allTools: ToolDefinition[] = [
	...jsonTools,
	...yamlTools,
	...csvTools,
	...xmlTools,
	...encodeTools,
	...escapeTools,
	...diffTools,
	...tomlTools,
	...textTools,
	...numberTools,
	...colorTools,
	...cryptoTools,
	...webTools,
	...codeTools,
	...pdfTools,
	...imageTools,
	...fileTools,
	...qrTools,
	...generateTools
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
