import type {
	NamespaceBase,
	Enum as ProtobufEnum,
	Root as ProtobufRoot,
	Type as ProtobufType
} from 'protobufjs';

export type ProtobufMessageTypeInfo = {
	fullName: string;
	shortName: string;
};

function hasObjectField(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}

function isProtobufNamespace(value: unknown): value is NamespaceBase {
	return hasObjectField(value) && 'nested' in value;
}

function isProtobufEnum(value: unknown): value is ProtobufEnum {
	return hasObjectField(value) && 'values' in value;
}

function isProtobufType(value: unknown): value is ProtobufType {
	return hasObjectField(value) && 'fields' in value;
}

function protoScalarSample(typeName: string): string | number | boolean | null {
	const normalized = typeName.toLowerCase();

	if (normalized.includes('string')) return 'example';
	if (normalized.includes('bool')) return true;
	if (normalized.includes('bytes')) return 'AQ==';

	if (
		normalized.includes('float') ||
		normalized.includes('double') ||
		normalized.includes('number') ||
		normalized.includes('decimal')
	) {
		return 1.5;
	}

	// ints, uints, fixed/sfixed, sint, etc
	return 1;
}

function sampleEnumValue(enumType: ProtobufEnum): number {
	const entries = Object.entries(enumType.values as Record<string, unknown>);
	const numericValues = entries
		.map(([, v]) => (typeof v === 'number' ? v : undefined))
		.filter((v): v is number => v !== undefined);
	if (numericValues.length === 0) return 0;
	return numericValues[0];
}

function collectMessageTypesFromNamespace(
	namespace: NamespaceBase,
	seen: Set<string>,
	acc: ProtobufMessageTypeInfo[]
): void {
	for (const [key, nested] of Object.entries((namespace.nested as Record<string, unknown>) ?? {})) {
		if (isProtobufType(nested)) {
			const fullName = nested.fullName ?? key;
			if (!seen.has(fullName)) {
				seen.add(fullName);
				acc.push({ fullName, shortName: nested.name ?? key });
			}
			continue;
		}

		if (isProtobufNamespace(nested)) {
			collectMessageTypesFromNamespace(nested, seen, acc);
		}
	}
}

export async function getProtobufMessageTypes(proto: string): Promise<ProtobufMessageTypeInfo[]> {
	const mod = await import('protobufjs');
	const root = (mod.parse(proto).root as ProtobufRoot) ?? ({} as ProtobufRoot);

	// Ensure nested message types are resolved for fullName / fields.
	root.resolveAll();

	const acc: ProtobufMessageTypeInfo[] = [];
	const seen = new Set<string>();

	collectMessageTypesFromNamespace(root as NamespaceBase, seen, acc);

	acc.sort((a, b) => a.fullName.localeCompare(b.fullName));
	return acc;
}

function safeFullName(type: ProtobufType): string {
	return type.fullName ?? type.name ?? 'AnonymousMessage';
}

function sampleFromType(
	type: ProtobufType,
	maxDepth: number,
	visited: Set<string>,
	depth: number
): Record<string, unknown> {
	if (depth > maxDepth) return {};

	const fullName = safeFullName(type);
	if (visited.has(fullName)) return {};

	visited.add(fullName);

	const fieldsObj = type.fields as Record<string, unknown>;
	const fieldEntries = Object.values(fieldsObj)
		.filter(
			(v): v is { name?: string; id?: number; repeated?: boolean; oneof?: unknown } =>
				typeof v === 'object' && v !== null
		)
		.map((v) => v as { name: string; id: number; repeated?: boolean; oneof?: unknown })
		.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

	const result: Record<string, unknown> = {};

	// Handle oneof: only pick the first field encountered per group.
	const chosenOneofGroups = new Set<string>();

	for (const field of fieldEntries) {
		const fieldName = field.name;
		const fieldAny = field as Record<string, unknown>;
		const repeated = Boolean(fieldAny.repeated);
		const oneofGroup = typeof fieldAny.oneof === 'string' ? (fieldAny.oneof as string) : undefined;

		if (oneofGroup) {
			if (chosenOneofGroups.has(oneofGroup)) continue;
			chosenOneofGroups.add(oneofGroup);
		}

		const sampleValue = ((): unknown => {
			// Map fields
			if (fieldAny.map) {
				const keyTypeName =
					typeof fieldAny.keyType === 'string' ? (fieldAny.keyType as string) : 'string';
				const valueResolved = fieldAny.resolvedType;

				const keySample = protoScalarSample(keyTypeName);
				let valueSample: unknown = protoScalarSample(
					typeof fieldAny.type === 'string' ? (fieldAny.type as string) : 'string'
				);

				if (isProtobufEnum(valueResolved)) {
					valueSample = sampleEnumValue(valueResolved);
				} else if (isProtobufType(valueResolved)) {
					valueSample = sampleFromType(valueResolved, maxDepth, visited, depth + 1);
				} else if (typeof fieldAny.type === 'string') {
					valueSample = protoScalarSample(fieldAny.type as string);
				}

				return { [String(keySample)]: valueSample };
			}

			// Resolved enum / message types
			if (isProtobufEnum(fieldAny.resolvedType)) {
				return sampleEnumValue(fieldAny.resolvedType);
			}

			if (isProtobufType(fieldAny.resolvedType)) {
				return sampleFromType(fieldAny.resolvedType, maxDepth, visited, depth + 1);
			}

			// Scalars (string/int/bool/bytes/...)
			if (typeof fieldAny.type === 'string') {
				return protoScalarSample(fieldAny.type);
			}

			return null;
		})();

		if (repeated) {
			result[fieldName] = [sampleValue];
		} else {
			result[fieldName] = sampleValue;
		}
	}

	return result;
}

export async function protobufToSampleJson(
	proto: string,
	messageTypeFullName: string,
	options: { maxDepth?: number } = {}
): Promise<string> {
	const mod = await import('protobufjs');
	const root = (mod.parse(proto).root as ProtobufRoot) ?? ({} as ProtobufRoot);
	root.resolveAll();

	let messageType: ProtobufType;
	try {
		messageType = root.lookupType(messageTypeFullName) as ProtobufType;
	} catch {
		throw new Error(`Protobuf message type not found: ${messageTypeFullName}`);
	}

	const maxDepth = options.maxDepth ?? 3;
	const sample = sampleFromType(messageType, maxDepth, new Set<string>(), 0);
	return JSON.stringify(sample, null, 2);
}
