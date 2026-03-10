import { describe, expect, it } from 'vitest';
import { format, validate, toJson, toYaml } from '../../src/lib/engines/toml/toml.engine.js';

describe('TOML Engine', () => {
    const sampleToml = 'title = "TOML Example"\n[owner]\nname = "Tom"';

    it('formats TOML correctly', async () => {
        const result = await format(sampleToml);
        expect(result).toContain('title = "TOML Example"');
    });

    it('validates TOML correctly', async () => {
        const valid = await validate(sampleToml);
        expect(valid.valid).toBe(true);

        const invalid = await validate('invalid = "');
        expect(invalid.valid).toBe(false);
    });

    it('converts TOML to JSON', async () => {
        const result = await toJson(sampleToml);
        const parsed = JSON.parse(result);
        expect(parsed.title).toBe('TOML Example');
        expect(parsed.owner.name).toBe('Tom');
    });

    it('converts TOML to YAML', async () => {
        const result = await toYaml(sampleToml);
        expect(result).toContain('title: TOML Example');
        expect(result).toContain('owner:');
        expect(result).toContain('name: Tom');
    });
});
