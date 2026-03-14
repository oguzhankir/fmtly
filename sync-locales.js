const fs = require('node:fs');
const path = require('node:path');

// Read English locale as reference
const enPath = path.join(__dirname, 'src/lib/i18n/registry/en.ts');
const enContent = fs.readFileSync(enPath, 'utf8');

// Extract all keys from English
const enKeys = {};
const keyRegex = /'([^']+)':/g;
let match;
while ((match = keyRegex.exec(enContent)) !== null) {
	enKeys[match[1]] = true;
}

console.log(`Found ${Object.keys(enKeys).length} keys in English locale`);

// List of all locale files
const locales = [
	'ar',
	'bn',
	'de',
	'es',
	'fr',
	'hi',
	'it',
	'ja',
	'ko',
	'pt',
	'ru',
	'tr',
	'ur',
	'zh'
];

// Process each locale
locales.forEach((locale) => {
	if (locale === 'en') return; // Skip English

	const localePath = path.join(__dirname, `src/lib/i18n/registry/${locale}.ts`);
	const localeContent = fs.readFileSync(localePath, 'utf8');

	// Extract existing keys
	const existingKeys = {};
	const localeKeyRegex = /'([^']+)':/g;
	while ((match = localeKeyRegex.exec(localeContent)) !== null) {
		existingKeys[match[1]] = true;
	}

	// Find missing keys
	const missingKeys = Object.keys(enKeys).filter((key) => !existingKeys[key]);

	if (missingKeys.length > 0) {
		console.log(`\n${locale}.ts is missing ${missingKeys.length} keys`);

		// Generate missing keys with English fallback
		const missingEntries = missingKeys.map((key) => {
			// Simple approach: use key as value for complex cases
			return `	'${key}': '${key}',`;
		});

		// Insert missing keys before the closing brace
		const closingBraceIndex = localeContent.lastIndexOf('};');
		const beforeClosing = localeContent.substring(0, closingBraceIndex);
		const afterClosing = localeContent.substring(closingBraceIndex);

		const newContent = `${beforeClosing}\n	// Missing keys from English\n${missingEntries.join('\n')}\n${afterClosing}`;

		// Write back to file
		fs.writeFileSync(localePath, newContent, 'utf8');
		console.log(`Added ${missingKeys.length} missing keys to ${locale}.ts`);
	} else {
		console.log(`\n${locale}.ts is already complete!`);
	}
});

console.log('\n✅ Locale synchronization complete!');
