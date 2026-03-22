export type RsaModulusBits = 2048 | 4096;
export type EcNamedCurve = 'P-256' | 'P-384';

function arrayBufferToBase64(buf: ArrayBuffer): string {
	const bytes = new Uint8Array(buf);
	let binary = '';
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}

function toPem(label: string, der: ArrayBuffer): string {
	const b64 = arrayBufferToBase64(der);
	const lines = b64.match(/.{1,64}/g)?.join('\n') ?? b64;
	return `-----BEGIN ${label}-----\n${lines}\n-----END ${label}-----\n`;
}

export async function generateRsaKeyPairPem(bits: RsaModulusBits): Promise<{
	publicPem: string;
	privatePem: string;
}> {
	const pair = await crypto.subtle.generateKey(
		{
			name: 'RSA-PSS',
			modulusLength: bits,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: 'SHA-256'
		},
		true,
		['sign', 'verify']
	);
	const pubDer = await crypto.subtle.exportKey('spki', pair.publicKey);
	const privDer = await crypto.subtle.exportKey('pkcs8', pair.privateKey);
	return {
		publicPem: toPem('PUBLIC KEY', pubDer),
		privatePem: toPem('PRIVATE KEY', privDer)
	};
}

export async function generateEcKeyPairPem(curve: EcNamedCurve): Promise<{
	publicPem: string;
	privatePem: string;
}> {
	const pair = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: curve }, true, [
		'sign',
		'verify'
	]);
	const pubDer = await crypto.subtle.exportKey('spki', pair.publicKey);
	const privDer = await crypto.subtle.exportKey('pkcs8', pair.privateKey);
	return {
		publicPem: toPem('PUBLIC KEY', pubDer),
		privatePem: toPem('PRIVATE KEY', privDer)
	};
}
