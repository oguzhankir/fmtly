export interface FormatOptions {
	locale?: string;
	decimals?: number;
	useGrouping?: boolean;
}

export interface FormattedNumber {
	value: string;
	parts: Intl.NumberFormatPart[];
}

// NUMBER FORMATTER
export function formatNumber(n: string, options: FormatOptions = {}): FormattedNumber {
	const val = Number(n);
	if (Number.isNaN(val)) {
		throw new Error('Invalid number');
	}

	const formatter = new Intl.NumberFormat(options.locale || 'en-US', {
		minimumFractionDigits: options.decimals ?? 0,
		maximumFractionDigits: options.decimals ?? 2,
		useGrouping: options.useGrouping ?? true
	});

	return {
		value: formatter.format(val),
		parts: formatter.formatToParts(val)
	};
}

// ROMAN NUMERALS
const ROMAN_MAP: Array<[number, string]> = [
	[1000, 'M'],
	[900, 'CM'],
	[500, 'D'],
	[400, 'CD'],
	[100, 'C'],
	[90, 'XC'],
	[50, 'L'],
	[40, 'XL'],
	[10, 'X'],
	[9, 'IX'],
	[5, 'V'],
	[4, 'IV'],
	[1, 'I']
];

export function toRoman(n: number): string {
	if (!Number.isInteger(n) || n <= 0 || n > 3999) {
		throw new Error('Roman numerals must be integers between 1 and 3999');
	}

	let num = n;
	let result = '';

	for (const [val, char] of ROMAN_MAP) {
		while (num >= val) {
			result += char;
			num -= val;
		}
	}

	return result;
}

export function fromRoman(s: string): number {
	const upper = s.toUpperCase().trim();
	if (!upper || !/^[MDCLXVI]+$/.test(upper)) {
		throw new Error('Invalid Roman numeral characters');
	}

	let total = 0;
	let i = 0;

	// Reverse map for lookup
	const map: Record<string, number> = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	while (i < upper.length) {
		// Look ahead 2 chars for subtractive notation like IX
		if (i + 1 < upper.length) {
			const doubleChar = upper.substring(i, i + 2);
			if (map[doubleChar]) {
				total += map[doubleChar];
				i += 2;
				continue;
			}
		}

		// Look 1 char
		const singleChar = upper.substring(i, i + 1);
		if (map[singleChar]) {
			total += map[singleChar];
			i++;
		} else {
			throw new Error('Invalid Roman numeral sequence');
		}
	}

	// Double check validity by converting back
	if (toRoman(total) !== upper) {
		throw new Error('Invalid Roman numeral sequence');
	}

	return total;
}

// PERCENTAGE CALCULATOR
export function percentOf(percent: number, total: number): number {
	return (percent / 100) * total;
}

export function percentChange(from: number, to: number): number {
	if (from === 0) {
		throw new Error('Cannot calculate percentage change from zero');
	}
	return ((to - from) / Math.abs(from)) * 100;
}

export function percentDiff(a: number, b: number): number {
	if (a === 0 && b === 0) return 0;
	return (Math.abs(a - b) / ((a + b) / 2)) * 100;
}

// SCIENTIFIC NOTATION
export function toScientific(n: string): string {
	const val = Number(n);
	if (Number.isNaN(val)) {
		throw new Error('Invalid number');
	}

	const sci = val.toExponential();
	// Format "1.234e+4" to "1.234 × 10⁴"
	const [base, exp] = sci.split('e');
	if (!exp) return base;

	const expNum = parseInt(exp, 10);
	const superscripts: Record<string, string> = {
		'0': '⁰',
		'1': '¹',
		'2': '²',
		'3': '³',
		'4': '⁴',
		'5': '⁵',
		'6': '⁶',
		'7': '⁷',
		'8': '⁸',
		'9': '⁹',
		'-': '⁻',
		'+': ''
	};

	let exponentStr = '';
	const expStrVal = expNum.toString();
	for (const char of expStrVal) {
		exponentStr += superscripts[char] || char;
	}

	return `${base} × 10${exponentStr}`;
}

export function fromScientific(s: string): string {
	// Parse back "1.234 × 10⁴" or standard "1.234e4"
	let str = s.replace(/\s/g, '').toLowerCase();

	// Convert superscript back mapping
	const subs: Record<string, string> = {
		'⁰': '0',
		'¹': '1',
		'²': '2',
		'³': '3',
		'⁴': '4',
		'⁵': '5',
		'⁶': '6',
		'⁷': '7',
		'⁸': '8',
		'⁹': '9',
		'⁻': '-'
	};

	let hasSuper = false;
	let parsedExp = '';
	for (let i = 0; i < str.length; i++) {
		if (subs[str[i]]) {
			hasSuper = true;
			parsedExp += subs[str[i]];
		} else if (hasSuper) {
			parsedExp += str[i];
		}
	}

	if (hasSuper) {
		str = str.split('×')[0] + 'e' + parsedExp;
	} else {
		str = str.replace('×10^', 'e').replace('x10^', 'e');
	}

	const val = Number(str);
	if (Number.isNaN(val)) {
		throw new Error('Invalid scientific notation');
	}

	// Use BigInt or string manipulation for very large/small numbers to avoid precision loss if it's just formatting
	// For Phase 2, sticking to standard Number parser
	return val.toString();
}
