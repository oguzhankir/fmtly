import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const toolsDir = join(process.cwd(), 'src/lib/registry/tools');
const files = readdirSync(toolsDir).filter((f) => f.endsWith('.ts'));

// Naive generic related links
const fallbackTools = [
	'json/formatter',
	'text/word-counter',
	'color/contrast',
	'crypto/hash',
	'image/compress',
	'pdf/merge',
	'generate/fake-data',
	'web/ip-lookup',
	'file/zip',
	'number/unit-converter'
];

for (const file of files) {
	const filePath = join(toolsDir, file);
	let content = readFileSync(filePath, 'utf8');

	// A regex to find `relatedTools: [...]`
	// SvelteKit formatters typically output arrays over multiple lines, so we match across lines.
	const rgx = /relatedTools:\s*\[([\s\S]*?)\]/g;

	content = content.replace(rgx, (match, arrayContent) => {
		// Extract existing tools
		const existingRaw = arrayContent
			.split(',')
			.map((s) => s.trim().replace(/['"]/g, ''))
			.filter(Boolean);

		const needed = 4 - existingRaw.length;
		if (needed > 0) {
			let added = 0;
			for (const fallback of fallbackTools) {
				if (!existingRaw.includes(fallback)) {
					existingRaw.push(fallback);
					added++;
				}
				if (added >= needed) break;
			}
		}

		// Rebuild the string
		const formattedArray = existingRaw.map((t) => `'${t}'`).join(', ');
		return `relatedTools: [${formattedArray}]`;
	});

	writeFileSync(filePath, content, 'utf8');
}

console.log('Fixed related tools arrays in all registry files.');
