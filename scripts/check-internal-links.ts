import { jsonTools } from '../src/lib/registry/tools/json.tools.js';
import { yamlTools } from '../src/lib/registry/tools/yaml.tools.js';
import { xmlTools } from '../src/lib/registry/tools/xml.tools.js';
import { csvTools } from '../src/lib/registry/tools/csv.tools.js';
import { textTools } from '../src/lib/registry/tools/text.tools.js';
import { colorTools } from '../src/lib/registry/tools/color.tools.js';
import { codeTools } from '../src/lib/registry/tools/code.tools.js';
import { cryptoTools } from '../src/lib/registry/tools/crypto.tools.js';
import { webTools } from '../src/lib/registry/tools/web.tools.js';
import { pdfTools } from '../src/lib/registry/tools/pdf.tools.js';
import { imageTools } from '../src/lib/registry/tools/image.tools.js';
import { fileTools } from '../src/lib/registry/tools/file.tools.js';
import { numberTools } from '../src/lib/registry/tools/number.tools.js';
import { generateTools } from '../src/lib/registry/tools/generate.tools.js';

const allTools = [
	...jsonTools,
	...yamlTools,
	...xmlTools,
	...csvTools,
	...textTools,
	...colorTools,
	...codeTools,
	...cryptoTools,
	...webTools,
	...pdfTools,
	...imageTools,
	...fileTools,
	...numberTools,
	...generateTools
];

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
