import { type PasswordGeneratorOptions, generatePassword } from '$engines/generate/password.js';
import { describe, expect, it } from 'vitest';

function opts(partial: Partial<PasswordGeneratorOptions>): PasswordGeneratorOptions {
	return {
		length: 12,
		uppercase: true,
		lowercase: true,
		digits: true,
		symbols: true,
		excludeAmbiguous: false,
		separatorEvery: 0,
		...partial
	};
}

describe('generate password engine', () => {
	it('respects length bounds', () => {
		const short = generatePassword(opts({ length: 2 }));
		expect(short.length).toBe(4);
		const long = generatePassword(opts({ length: 999 }));
		expect(long.length).toBe(256);
	});

	it('uses only lowercase when only lowercase enabled', () => {
		const s = generatePassword(
			opts({
				length: 40,
				uppercase: false,
				digits: false,
				symbols: false,
				excludeAmbiguous: false
			})
		);
		expect(s).toMatch(/^[a-z]+$/u);
	});

	it('inserts separators when separatorEvery > 0', () => {
		const s = generatePassword(opts({ length: 12, separatorEvery: 4 }));
		expect(s.split('-').length).toBe(3);
		expect(s.replaceAll('-', '').length).toBe(12);
	});

	it('excludes ambiguous characters from charset when requested', () => {
		let sawAmbiguous = false;
		for (let i = 0; i < 30; i++) {
			const s = generatePassword(
				opts({
					length: 64,
					uppercase: true,
					lowercase: true,
					digits: true,
					symbols: false,
					excludeAmbiguous: true
				})
			);
			if (/[0O1lI]/u.test(s)) sawAmbiguous = true;
		}
		expect(sawAmbiguous).toBe(false);
	});
});
