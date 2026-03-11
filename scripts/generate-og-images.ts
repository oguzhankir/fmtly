import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Import all tools and examples

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
import { examples } from '../src/lib/registry/examples/index.js';

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

// If Geist font doesn't exist locally, we fallback, but better to load it
// Let's assume there is a font file or we use a system font
GlobalFonts.registerFromPath(
	join(process.cwd(), 'node_modules', 'geist', 'dist', 'fonts', 'geist-sans', 'Geist-Bold.ttf'),
	'Geist'
);
// Registering a regular font for the watermark
GlobalFonts.registerFromPath(
	join(process.cwd(), 'node_modules', 'geist', 'dist', 'fonts', 'geist-sans', 'Geist-Regular.ttf'),
	'GeistRegular'
);

const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = join(process.cwd(), 'static', 'og');

if (!existsSync(OUT_DIR)) {
	mkdirSync(OUT_DIR, { recursive: true });
}

function drawGrid(ctx: any) {
	ctx.strokeStyle = '#222222';
	ctx.lineWidth = 1;

	const gridSize = 40;
	for (let x = 0; x <= WIDTH; x += gridSize) {
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, HEIGHT);
		ctx.stroke();
	}
	for (let y = 0; y <= HEIGHT; y += gridSize) {
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(WIDTH, y);
		ctx.stroke();
	}
}

function generateImage(title: string, category: string, filename: string) {
	const canvas = createCanvas(WIDTH, HEIGHT);
	const ctx = canvas.getContext('2d');

	// Background
	ctx.fillStyle = '#0a0a0a';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	// Grid
	drawGrid(ctx);

	// Category Badge
	const badgePaddingX = 24;
	const badgePaddingY = 12;
	ctx.font = '24px Geist';
	const badgeText = category.toUpperCase();
	const badgeMetrics = ctx.measureText(badgeText);
	const badgeWidth = badgeMetrics.width + badgePaddingX * 2;
	const badgeHeight = 24 + badgePaddingY * 2;
	const badgeX = WIDTH - badgeWidth - 40;
	const badgeY = 40;

	ctx.fillStyle = '#3b82f6'; // Accent color (blue)
	ctx.beginPath();
	ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, badgeHeight / 2);
	ctx.fill();

	ctx.fillStyle = '#ffffff';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(badgeText, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2);

	// Title
	ctx.fillStyle = '#ffffff';
	ctx.font = 'bold 52px Geist';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(title, WIDTH / 2, HEIGHT / 2);

	// Watermark
	ctx.fillStyle = '#666666'; // muted
	ctx.font = '24px GeistRegular';
	ctx.textAlign = 'left';
	ctx.fillText('fmtly.dev', 40, HEIGHT - 40);

	const buffer = canvas.toBuffer('image/png');
	writeFileSync(join(OUT_DIR, filename), buffer);
	console.log(`Generated: ${filename}`);
}

async function run() {
	console.log('Generating OG Images...');

	for (const tool of allTools) {
		const filename = `${tool.category}-${tool.slug}.png`;
		generateImage(tool.displayName, tool.category, filename);
	}

	for (const example of examples) {
		const filename = `examples-${example.slug}.png`;
		generateImage(example.title, example.format, filename);
	}

	// Categories and Homepage
	generateImage('Developer Tools', 'Platform', 'index.png');
	generateImage('Examples', 'Platform', 'examples.png');

	// unique categories
	const categories = Array.from(new Set(allTools.map((t) => t.category)));
	for (const cat of categories) {
		generateImage(`${cat} tools`, 'Category', `category-${cat}.png`);
	}

	console.log('All OG images generated.');
}

run().catch(console.error);
