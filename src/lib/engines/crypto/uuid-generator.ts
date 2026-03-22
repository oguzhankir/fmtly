export async function generateUuidV4String(): Promise<string> {
	const { v4 } = await import('uuid');
	return v4();
}

export async function generateUuidV7String(): Promise<string> {
	const { v7 } = await import('uuid');
	return v7();
}

export async function generateUlidString(): Promise<string> {
	const { ulid } = await import('ulid');
	return ulid();
}

export async function decodeUlidTimestamp(ulidStr: string): Promise<Date | null> {
	const { decodeTime, isValid } = await import('ulid');
	if (!isValid(ulidStr)) return null;
	return new Date(decodeTime(ulidStr));
}
