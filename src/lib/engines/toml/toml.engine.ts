export async function format(toml: string): Promise<string> {
    const { stringify, parse } = await import('smol-toml');
    return stringify(parse(toml));
}

export type ValidationResult = { valid: boolean; error?: string };

export async function validate(toml: string): Promise<ValidationResult> {
    try {
        const { parse } = await import('smol-toml');
        parse(toml);
        return { valid: true };
    } catch (e: any) {
        return { valid: false, error: e.message };
    }
}

export async function toJson(toml: string): Promise<string> {
    const { parse } = await import('smol-toml');
    return JSON.stringify(parse(toml), null, 2);
}

export async function toYaml(toml: string): Promise<string> {
    const { parse } = await import('smol-toml');
    const yaml = await import('js-yaml');
    return yaml.dump(parse(toml), { indent: 2 });
}
