// Math engine — lazy loads mathjs for statistics and matrix operations

export type Stats = {
	mean: number;
	median: number;
	mode: number[];
	variance: number;
	stdDev: number;
	min: number;
	max: number;
	range: number;
	sum: number;
	count: number;
	percentile25: number;
	percentile75: number;
	percentile95: number;
	iqr: number;
};

export type MatrixOp = 'add' | 'subtract' | 'multiply' | 'determinant' | 'transpose' | 'inverse';

export type MatrixResult = {
	matrix?: number[][];
	scalar?: number;
	error?: string;
};

async function getMathjs() {
	return import('mathjs');
}

export async function statistics(values: number[]): Promise<Stats> {
	const m = await getMathjs();
	const p25 = m.quantileSeq(values, 0.25) as number;
	const p75 = m.quantileSeq(values, 0.75) as number;
	const p95 = m.quantileSeq(values, 0.95) as number;
	return {
		mean: m.mean(values) as number,
		median: m.median(values) as number,
		mode: m.mode(values) as number[],
		variance: m.variance(values) as unknown as number,
		stdDev: m.std(values) as unknown as number,
		min: m.min(...values),
		max: m.max(...values),
		range: m.max(...values) - m.min(...values),
		sum: m.sum(values),
		count: values.length,
		percentile25: p25,
		percentile75: p75,
		percentile95: p95,
		iqr: p75 - p25
	};
}

export async function matrixCalc(
	a: number[][],
	b: number[][] | null,
	operation: MatrixOp
): Promise<MatrixResult> {
	const m = await getMathjs();
	try {
		const matA = m.matrix(a);
		if (operation === 'determinant') return { scalar: m.det(matA) as number };
		if (operation === 'transpose')
			return { matrix: (m.transpose(matA) as unknown as { toArray(): number[][] }).toArray() };
		if (operation === 'inverse')
			return { matrix: (m.inv(matA) as unknown as { toArray(): number[][] }).toArray() };
		if (!b) return { error: 'Matrix B is required for this operation' };
		const matB = m.matrix(b);
		if (operation === 'add')
			return { matrix: (m.add(matA, matB) as unknown as { toArray(): number[][] }).toArray() };
		if (operation === 'subtract')
			return { matrix: (m.subtract(matA, matB) as unknown as { toArray(): number[][] }).toArray() };
		if (operation === 'multiply')
			return { matrix: (m.multiply(matA, matB) as unknown as { toArray(): number[][] }).toArray() };
		return { error: 'Unknown operation' };
	} catch (e: unknown) {
		return { error: e instanceof Error ? e.message : 'Matrix calculation error' };
	}
}

// --- UNIT CONVERTER (pure JS, no mathjs) ---

export type UnitCategory =
	| 'length'
	| 'weight'
	| 'temperature'
	| 'area'
	| 'volume'
	| 'speed'
	| 'pressure';

type ConversionTable = Record<string, number>; // factor to base unit

const LENGTH: ConversionTable = {
	mm: 0.001,
	cm: 0.01,
	m: 1,
	km: 1000,
	in: 0.0254,
	ft: 0.3048,
	yd: 0.9144,
	mi: 1609.344
};
const WEIGHT: ConversionTable = { mg: 0.001, g: 1, kg: 1000, oz: 28.3495, lb: 453.592, ton: 1e6 };
const AREA: ConversionTable = {
	'mm²': 1e-6,
	'cm²': 1e-4,
	'm²': 1,
	'km²': 1e6,
	'in²': 6.4516e-4,
	'ft²': 0.092903,
	'yd²': 0.836127,
	acre: 4046.86,
	ha: 10000
};
const VOLUME: ConversionTable = {
	ml: 0.001,
	l: 1,
	'm³': 1000,
	gal: 3.78541,
	qt: 0.946353,
	pt: 0.473176,
	cup: 0.236588,
	'fl oz': 0.0295735
};
const SPEED: ConversionTable = {
	'm/s': 1,
	'km/h': 0.277778,
	mph: 0.44704,
	kn: 0.514444,
	'ft/s': 0.3048
};
const PRESSURE: ConversionTable = {
	Pa: 1,
	kPa: 1000,
	bar: 100000,
	psi: 6894.76,
	atm: 101325,
	mmHg: 133.322
};

const TABLES: Record<string, ConversionTable> = {
	length: LENGTH,
	weight: WEIGHT,
	area: AREA,
	volume: VOLUME,
	speed: SPEED,
	pressure: PRESSURE
};

export function getUnitsForCategory(category: UnitCategory): string[] {
	if (category === 'temperature') return ['°C', '°F', 'K'];
	return Object.keys(TABLES[category] ?? {});
}

export function convertUnit(
	value: number,
	category: UnitCategory,
	from: string
): Record<string, number> {
	if (category === 'temperature') return convertTemperature(value, from);
	const table = TABLES[category];
	if (!table || !(from in table)) return {};
	const baseValue = value * table[from];
	const result: Record<string, number> = {};
	for (const [unit, factor] of Object.entries(table)) {
		result[unit] = baseValue / factor;
	}
	return result;
}

function convertTemperature(value: number, from: string): Record<string, number> {
	let celsius: number;
	if (from === '°C') celsius = value;
	else if (from === '°F') celsius = ((value - 32) * 5) / 9;
	else celsius = value - 273.15; // K
	return {
		'°C': celsius,
		'°F': (celsius * 9) / 5 + 32,
		K: celsius + 273.15
	};
}
