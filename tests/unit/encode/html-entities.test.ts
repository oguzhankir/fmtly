import { describe, expect, it } from 'vitest';
import {
	HTML_ENTITY_WORKER_THRESHOLD_BYTES,
	processHTMLEntities,
	shouldUseHTMLEntityWorker
} from '../../../src/lib/engines/encode/html-entities.js';

describe('processHTMLEntities', () => {
	it('encodes essentials in named mode', () => {
		const r = processHTMLEntities('a<b>&"\'', 'encode', {
			encode: { format: 'named', scope: 'essentials' }
		});
		expect(r.error).toBeNull();
		expect(r.output).toBe('a&lt;b&gt;&amp;&quot;&#39;');
	});

	it('encodes non-ASCII when scope is all_non_ascii with named fallback', () => {
		const r = processHTMLEntities('café', 'encode', {
			encode: { format: 'named', scope: 'all_non_ascii' }
		});
		expect(r.error).toBeNull();
		expect(r.output).toContain('&');
		expect(r.output).not.toBe('café');
	});

	it('encodes with decimal format', () => {
		const r = processHTMLEntities('x<y', 'encode', {
			encode: { format: 'decimal', scope: 'essentials' }
		});
		expect(r.output).toBe('x&#60;y');
	});

	it('encodes with hex format', () => {
		const r = processHTMLEntities('<', 'encode', {
			encode: { format: 'hex', scope: 'essentials' }
		});
		expect(r.output).toBe('&#x3C;');
	});

	it('decodes named and numeric entities permissively', () => {
		const r = processHTMLEntities('&amp; &lt; &#169; &copy;', 'decode', {
			decode: { mode: 'permissive' }
		});
		expect(r.error).toBeNull();
		expect(r.output).toBe('& < © ©');
	});

	it('leaves unknown entities in permissive mode', () => {
		const r = processHTMLEntities('&notarealentity;', 'decode', {
			decode: { mode: 'permissive' }
		});
		expect(r.error).toBeNull();
		expect(r.output).toBe('&notarealentity;');
	});

	it('rejects unknown named entities in strict mode', () => {
		const r = processHTMLEntities('&notarealentity;', 'decode', {
			decode: { mode: 'strict' }
		});
		expect(r.error).not.toBeNull();
		expect(r.error?.code).toBe('invalid_entity');
		expect(r.output).toBe('');
	});

	it('encodes line breaks when option enabled', () => {
		const r = processHTMLEntities('a\nb\rc', 'encode', {
			encode: { encodeLineBreaks: true, scope: 'essentials', format: 'named' }
		});
		expect(r.output).toBe('a&#10;b&#13;c');
	});

	it('returns empty metrics for empty input', () => {
		const r = processHTMLEntities('', 'encode');
		expect(r.output).toBe('');
		expect(r.metrics.inputCharacters).toBe(0);
	});
});

describe('shouldUseHTMLEntityWorker', () => {
	it('returns false for small input', () => {
		expect(shouldUseHTMLEntityWorker('hello')).toBe(false);
	});

	it('returns true only for inputs above 500KB', () => {
		const large = 'a'.repeat(HTML_ENTITY_WORKER_THRESHOLD_BYTES + 8);
		expect(shouldUseHTMLEntityWorker(large)).toBe(true);
	});
});
