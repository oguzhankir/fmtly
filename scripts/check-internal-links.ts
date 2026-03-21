import { getAllTools } from '../src/lib/registry/index.js';

const allTools = getAllTools();

let hasErrors = false;

console.log('Running internal linking audit...');

for (const tool of allTools) {
	if (!tool.relatedTools || tool.relatedTools.length < 4) {
		console.error(
			`[!] SEO Error: Tool /${tool.category}/${tool.slug} has only ${tool.relatedTools?.length || 0} related links. Minimum required is 4.`
		);
		hasErrors = true;
	}
}

if (hasErrors) {
	console.error('\nInternal linking audit failed. Please add more related tools.');
	process.exit(1);
} else {
	console.log(`\nAudit passed! All ${allTools.length} tools have >= 4 related links.`);
}
