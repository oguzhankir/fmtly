import { unicodeName, unicodeReadableName } from 'unicode-name';
import { getCategory, getEastAsianWidth, getScript } from 'unicode-properties';
import type { UnicodePropertyLookup } from './unicode-inspector.js';

function formatFallbackCodePoint(codePoint: number): string {
	return `U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}`;
}

export function createUnicodePropertyLookup(): UnicodePropertyLookup {
	return {
		readableNameForCodePoint(codePoint: number): string {
			const label = unicodeReadableName(codePoint);
			if (typeof label === 'string' && label.length > 0) {
				return label;
			}
			return formatFallbackCodePoint(codePoint);
		},
		nameForGrapheme(segment: string): string | undefined {
			return unicodeName(segment);
		},
		category: (codePoint: number): string => getCategory(codePoint),
		script: (codePoint: number): string => getScript(codePoint),
		eastAsianWidth: (codePoint: number): string => getEastAsianWidth(codePoint)
	};
}
