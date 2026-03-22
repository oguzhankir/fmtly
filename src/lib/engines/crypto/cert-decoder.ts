import { bytesToHex } from './hash.js';

export type DecodedCertificate = {
	subject: string;
	issuer: string;
	serialNumber: string;
	notBefore: string;
	notAfter: string;
	signatureAlgorithm: string;
	publicKeySummary: string;
	san: string[];
	fingerprintSha256: string;
};

function formatColonHex(bytes: Uint8Array): string {
	const h = bytesToHex(bytes).toUpperCase();
	return h.replace(/(.{2})(?=.)/g, '$1:');
}

export async function decodeCertificatePem(pem: string): Promise<DecodedCertificate> {
	const { X509Certificate, SubjectAlternativeNameExtension } = await import('@peculiar/x509');
	const trimmed = pem.trim();
	if (!trimmed) {
		throw new Error('EMPTY');
	}
	const cert = new X509Certificate(trimmed);
	const sanExt = cert.getExtension(SubjectAlternativeNameExtension);
	const san: string[] = [];
	if (sanExt?.names?.items?.length) {
		for (const gn of sanExt.names.items) {
			san.push(`${gn.type}: ${gn.value}`);
		}
	}
	const thumb = await cert.getThumbprint('SHA-256');
	const fp = formatColonHex(new Uint8Array(thumb));
	const alg = cert.signatureAlgorithm as Algorithm & { hash?: Algorithm };
	const pub = cert.publicKey;
	const pubAlg = pub.algorithm as Algorithm & { namedCurve?: string; modulusLength?: number };
	let publicKeySummary = String(pubAlg.name ?? '—');
	if (typeof pubAlg.namedCurve === 'string') {
		publicKeySummary += ` (${pubAlg.namedCurve})`;
	}
	if (typeof pubAlg.modulusLength === 'number') {
		publicKeySummary += ` ${pubAlg.modulusLength}-bit`;
	}
	const hashPart = alg.hash ? String((alg.hash as Algorithm).name) : '—';
	return {
		subject: cert.subject,
		issuer: cert.issuer,
		serialNumber: cert.serialNumber,
		notBefore: cert.notBefore.toISOString(),
		notAfter: cert.notAfter.toISOString(),
		signatureAlgorithm: `${String(alg.name)} (${hashPart})`,
		publicKeySummary,
		san,
		fingerprintSha256: fp
	};
}
