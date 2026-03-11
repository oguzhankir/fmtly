// JSON Schema generator — pure JS, no library

type JsonSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'null' | 'object' | 'array';

type JsonSchema = {
	type: JsonSchemaType;
	properties?: Record<string, JsonSchema>;
	required?: string[];
	items?: JsonSchema | Record<string, never>;
};

export type SchemaOptions = {
	typeName?: string;
};

export function generateJsonSchema(json: string, options: SchemaOptions = {}): string {
	const data = JSON.parse(json);
	const schema = {
		$schema: 'https://json-schema.org/draft/2020-12/schema',
		title: options.typeName ?? 'Root',
		...inferSchema(data)
	};
	return JSON.stringify(schema, null, 2);
}

function inferSchema(value: unknown): JsonSchema {
	if (value === null) return { type: 'null' };
	if (Array.isArray(value)) {
		return {
			type: 'array',
			items: value.length > 0 ? inferSchema(value[0]) : {}
		};
	}
	if (typeof value === 'object') {
		const properties: Record<string, JsonSchema> = {};
		const required: string[] = [];
		for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
			properties[k] = inferSchema(v);
			required.push(k);
		}
		return { type: 'object', properties, required };
	}
	if (typeof value === 'number') {
		return { type: Number.isInteger(value) ? 'integer' : 'number' };
	}
	return { type: typeof value as JsonSchemaType };
}
