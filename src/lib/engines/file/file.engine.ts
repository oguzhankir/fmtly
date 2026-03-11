// File engine — ZIP, Excel, Hash. All lazy loaded.

export type ZipEntry = {
	name: string;
	size: number;
	isDir: boolean;
	preview: boolean;
};

export type ExcelResult = Record<string, unknown[]>;

// --- ZIP ---

export async function createZip(
	files: Array<{ name: string; content: ArrayBuffer }>
): Promise<Blob> {
	const JSZip = (await import('jszip')).default;
	const zip = new JSZip();
	for (const { name, content } of files) zip.file(name, content);
	return zip.generateAsync({ type: 'blob' });
}

export async function extractZip(zipBuffer: ArrayBuffer): Promise<ZipEntry[]> {
	const JSZip = (await import('jszip')).default;
	const zip = await JSZip.loadAsync(zipBuffer);
	const entries: ZipEntry[] = [];
	for (const [name, file] of Object.entries(zip.files)) {
		if (!file.dir) {
			const buf = await file.async('arraybuffer');
			entries.push({
				name,
				size: buf.byteLength,
				isDir: false,
				preview:
					name.endsWith('.txt') ||
					name.endsWith('.json') ||
					name.endsWith('.csv') ||
					name.endsWith('.md') ||
					name.endsWith('.xml') ||
					name.endsWith('.html')
			});
		}
	}
	return entries;
}

export async function extractZipFile(zipBuffer: ArrayBuffer, fileName: string): Promise<string> {
	const JSZip = (await import('jszip')).default;
	const zip = await JSZip.loadAsync(zipBuffer);
	const file = zip.file(fileName);
	if (!file) throw new Error(`File not found: ${fileName}`);
	return file.async('string');
}

export async function extractZipAll(
	zipBuffer: ArrayBuffer
): Promise<Array<{ name: string; blob: Blob }>> {
	const JSZip = (await import('jszip')).default;
	const zip = await JSZip.loadAsync(zipBuffer);
	const results: Array<{ name: string; blob: Blob }> = [];
	for (const [name, file] of Object.entries(zip.files)) {
		if (!file.dir) {
			const blob = await file.async('blob');
			results.push({ name, blob });
		}
	}
	return results;
}

// --- EXCEL ---

export async function excelToJson(buffer: ArrayBuffer): Promise<ExcelResult> {
	const XLSX = await import('xlsx');
	const workbook = XLSX.read(buffer, { type: 'array' });
	const result: ExcelResult = {};
	for (const sheetName of workbook.SheetNames) {
		result[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
	}
	return result;
}

export async function jsonToExcel(data: Record<string, unknown>[]): Promise<Blob> {
	const XLSX = await import('xlsx');
	const ws = XLSX.utils.json_to_sheet(data);
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	const buffer = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
	return new Blob([buffer], {
		type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	});
}

// --- FILE HASH ---

export async function hashFile(
	buffer: ArrayBuffer,
	algorithm: 'SHA-256' | 'SHA-512' | 'MD5'
): Promise<string> {
	if (algorithm === 'MD5') {
		return md5(new Uint8Array(buffer));
	}
	const hashBuffer = await crypto.subtle.digest(algorithm, buffer);
	return Array.from(new Uint8Array(hashBuffer))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
}

// Minimal MD5 — pure JS (RFC 1321)
function md5(input: Uint8Array): string {
	function add32(a: number, b: number) {
		return (a + b) | 0;
	}
	function cmn(q: number, a: number, b: number, x: number, s: number, t: number) {
		a = add32(add32(a, q), add32(x, t));
		return add32((a << s) | (a >>> (32 - s)), b);
	}
	function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
		return cmn((b & c) | (~b & d), a, b, x, s, t);
	}
	function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
		return cmn((b & d) | (c & ~d), a, b, x, s, t);
	}
	function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
		return cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number) {
		return cmn(c ^ (b | ~d), a, b, x, s, t);
	}

	const len = input.length;
	const bitLen = len * 8;
	// Padding
	const padded = new Uint8Array(((len + 72) >>> 6) * 64);
	padded.set(input);
	padded[len] = 0x80;
	const view = new DataView(padded.buffer);
	view.setUint32(padded.length - 8, bitLen >>> 0, true);
	view.setUint32(padded.length - 4, Math.floor(bitLen / 0x100000000), true);

	let a0 = 0x67452301;
	let b0 = 0xefcdab89;
	let c0 = 0x98badcfe;
	let d0 = 0x10325476;

	for (let i = 0; i < padded.length; i += 64) {
		const w: number[] = [];
		for (let j = 0; j < 16; j++) w[j] = view.getUint32(i + j * 4, true);

		let a = a0;
		let b = b0;
		let c = c0;
		let d = d0;

		a = ff(a, b, c, d, w[0], 7, -680876936);
		d = ff(d, a, b, c, w[1], 12, -389564586);
		c = ff(c, d, a, b, w[2], 17, 606105819);
		b = ff(b, c, d, a, w[3], 22, -1044525330);
		a = ff(a, b, c, d, w[4], 7, -176418897);
		d = ff(d, a, b, c, w[5], 12, 1200080426);
		c = ff(c, d, a, b, w[6], 17, -1473231341);
		b = ff(b, c, d, a, w[7], 22, -45705983);
		a = ff(a, b, c, d, w[8], 7, 1770035416);
		d = ff(d, a, b, c, w[9], 12, -1958414417);
		c = ff(c, d, a, b, w[10], 17, -42063);
		b = ff(b, c, d, a, w[11], 22, -1990404162);
		a = ff(a, b, c, d, w[12], 7, 1804603682);
		d = ff(d, a, b, c, w[13], 12, -40341101);
		c = ff(c, d, a, b, w[14], 17, -1502002290);
		b = ff(b, c, d, a, w[15], 22, 1236535329);

		a = gg(a, b, c, d, w[1], 5, -165796510);
		d = gg(d, a, b, c, w[6], 9, -1069501632);
		c = gg(c, d, a, b, w[11], 14, 643717713);
		b = gg(b, c, d, a, w[0], 20, -373897302);
		a = gg(a, b, c, d, w[5], 5, -701558691);
		d = gg(d, a, b, c, w[10], 9, 38016083);
		c = gg(c, d, a, b, w[15], 14, -660478335);
		b = gg(b, c, d, a, w[4], 20, -405537848);
		a = gg(a, b, c, d, w[9], 5, 568446438);
		d = gg(d, a, b, c, w[14], 9, -1019803690);
		c = gg(c, d, a, b, w[3], 14, -187363961);
		b = gg(b, c, d, a, w[8], 20, 1163531501);
		a = gg(a, b, c, d, w[13], 5, -1444681467);
		d = gg(d, a, b, c, w[2], 9, -51403784);
		c = gg(c, d, a, b, w[7], 14, 1735328473);
		b = gg(b, c, d, a, w[12], 20, -1926607734);

		a = hh(a, b, c, d, w[5], 4, -378558);
		d = hh(d, a, b, c, w[8], 11, -2022574463);
		c = hh(c, d, a, b, w[11], 16, 1839030562);
		b = hh(b, c, d, a, w[14], 23, -35309556);
		a = hh(a, b, c, d, w[1], 4, -1530992060);
		d = hh(d, a, b, c, w[4], 11, 1272893353);
		c = hh(c, d, a, b, w[7], 16, -155497632);
		b = hh(b, c, d, a, w[10], 23, -1094730640);
		a = hh(a, b, c, d, w[13], 4, 681279174);
		d = hh(d, a, b, c, w[0], 11, -358537222);
		c = hh(c, d, a, b, w[3], 16, -722521979);
		b = hh(b, c, d, a, w[6], 23, 76029189);
		a = hh(a, b, c, d, w[9], 4, -640364487);
		d = hh(d, a, b, c, w[12], 11, -421815835);
		c = hh(c, d, a, b, w[15], 16, 530742520);
		b = hh(b, c, d, a, w[2], 23, -995338651);

		a = ii(a, b, c, d, w[0], 6, -198630844);
		d = ii(d, a, b, c, w[7], 10, 1126891415);
		c = ii(c, d, a, b, w[14], 15, -1416354905);
		b = ii(b, c, d, a, w[5], 21, -57434055);
		a = ii(a, b, c, d, w[12], 6, 1700485571);
		d = ii(d, a, b, c, w[3], 10, -1894986606);
		c = ii(c, d, a, b, w[10], 15, -1051523);
		b = ii(b, c, d, a, w[1], 21, -2054922799);
		a = ii(a, b, c, d, w[8], 6, 1873313359);
		d = ii(d, a, b, c, w[15], 10, -30611744);
		c = ii(c, d, a, b, w[6], 15, -1560198380);
		b = ii(b, c, d, a, w[13], 21, 1309151649);
		a = ii(a, b, c, d, w[4], 6, -145523070);
		d = ii(d, a, b, c, w[11], 10, -1120210379);
		c = ii(c, d, a, b, w[2], 15, 718787259);
		b = ii(b, c, d, a, w[9], 21, -343485551);

		a0 = add32(a0, a);
		b0 = add32(b0, b);
		c0 = add32(c0, c);
		d0 = add32(d0, d);
	}

	const hex = (n: number) =>
		Array.from(new Uint8Array(new Int32Array([n]).buffer))
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('');
	return hex(a0) + hex(b0) + hex(c0) + hex(d0);
}
