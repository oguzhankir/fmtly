import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { GlobalFonts, createCanvas } from '@napi-rs/canvas';

// Import all tools and examples

import registryEn from '../src/lib/i18n/registry/en.js';
import { examples } from '../src/lib/registry/examples/index.js';
import { localizeToolDefinitions } from '../src/lib/registry/localized.js';
import { codeTools } from '../src/lib/registry/tools/code.tools.js';
import { colorTools } from '../src/lib/registry/tools/color.tools.js';
import { cryptoTools } from '../src/lib/registry/tools/crypto.tools.js';
import { csvTools } from '../src/lib/registry/tools/csv.tools.js';
import { fileTools } from '../src/lib/registry/tools/file.tools.js';
import { generateTools } from '../src/lib/registry/tools/generate.tools.js';
import { imageTools } from '../src/lib/registry/tools/image.tools.js';
import { jsonTools } from '../src/lib/registry/tools/json.tools.js';
import { numberTools } from '../src/lib/registry/tools/number.tools.js';
import { pdfTools } from '../src/lib/registry/tools/pdf.tools.js';
import { textTools } from '../src/lib/registry/tools/text.tools.js';
import { webTools } from '../src/lib/registry/tools/web.tools.js';
import { xmlTools } from '../src/lib/registry/tools/xml.tools.js';
import { yamlTools } from '../src/lib/registry/tools/yaml.tools.js';

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

const translate = (key: string, fallback?: string): string => registryEn[key] ?? fallback ?? key;
const localizedTools = localizeToolDefinitions(allTools, translate);

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

function drawLogo(ctx: any, x: number, y: number, size: number) {
	const centerX = x + size / 2;
	const centerY = y + size / 2;
	const radius = size * 0.38;

	// Lens ring with gradient
	const gradient = ctx.createLinearGradient(x, y, x + size, y + size);
	gradient.addColorStop(0, '#22D3EE');
	gradient.addColorStop(0.45, '#6366F1');
	gradient.addColorStop(1, '#A855F7');

	ctx.strokeStyle = gradient;
	ctx.lineWidth = size * 0.06;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
	ctx.stroke();

	// Code bars inside lens
	const barGradient = ctx.createLinearGradient(
		centerX,
		centerY - radius * 0.6,
		centerX,
		centerY + radius * 0.6
	);
	barGradient.addColorStop(0, '#22D3EE');
	barGradient.addColorStop(0.34, '#60A5FA');
	barGradient.addColorStop(0.67, '#818CF8');
	barGradient.addColorStop(1, '#C084FC');

	ctx.fillStyle = barGradient;

	const barHeight = size * 0.08;
	const barSpacing = size * 0.06;
	const bar1Y = centerY - barSpacing * 1.5 - barHeight;
	const bar2Y = centerY - barSpacing * 0.5;
	const bar3Y = centerY + barSpacing * 0.5;
	const bar4Y = centerY + barSpacing * 1.5 + barHeight * 0.5;

	// Bar 1: long
	ctx.fillRect(centerX - radius * 0.7, bar1Y, radius * 1.4, barHeight);
	// Bar 2: medium, indented
	ctx.fillRect(centerX - radius * 0.3, bar2Y, radius * 0.8, barHeight);
	// Bar 3: short, indented
	ctx.fillRect(centerX - radius * 0.3, bar3Y, radius * 0.5, barHeight);
	// Bar 4: very short
	ctx.fillRect(centerX - radius * 0.7, bar4Y, radius * 0.6, barHeight);
}

function generateImage(title: string, category: string, filename: string) {
	const canvas = createCanvas(WIDTH, HEIGHT);
	const ctx = canvas.getContext('2d');

	// Background
	ctx.fillStyle = '#0a0a0a';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	// Grid
	drawGrid(ctx);

	// Logo in top-left
	drawLogo(ctx, 40, 40, 80);

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
		const localizedTool = localizedTools.find((item) => item.id === tool.id) ?? tool;
		const filename = `${tool.category}-${tool.slug}.png`;
		generateImage(localizedTool.displayName, tool.category, filename);
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
