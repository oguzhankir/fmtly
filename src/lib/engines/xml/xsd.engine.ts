export type XsdValidationIssue = {
	message: string;
	line?: number;
	column?: number;
};

export type XsdValidationResult = {
	valid: boolean;
	message: string;
	errors: XsdValidationIssue[];
	warnings: string[];
};

function parseLineColumnFromMessage(message: string): { line?: number; column?: number } {
	const lineMatch =
		message.match(/line\s+(\d+)/i) ??
		message.match(/at\s+line\s+(\d+)/i) ??
		message.match(/línea\s+(\d+)/i);

	const columnMatch =
		message.match(/col(?:umn)?\s+(\d+)/i) ?? message.match(/at\s+column\s+(\d+)/i);

	return {
		line: lineMatch ? Number.parseInt(lineMatch[1] ?? '', 10) : undefined,
		column: columnMatch ? Number.parseInt(columnMatch[1] ?? '', 10) : undefined
	};
}

function issueFromError(error: string): XsdValidationIssue {
	const { line, column } = parseLineColumnFromMessage(error);
	return {
		message: error,
		line,
		column
	};
}

export async function validateXmlAgainstXsd(
	xmlText: string,
	xsdText: string
): Promise<XsdValidationResult> {
	if (!xmlText.trim()) {
		return {
			valid: false,
			message: 'XML input is empty.',
			errors: [{ message: 'XML input is empty.' }],
			warnings: []
		};
	}

	if (!xsdText.trim()) {
		return {
			valid: false,
			message: 'XSD input is empty.',
			errors: [{ message: 'XSD input is empty.' }],
			warnings: []
		};
	}

	const mod = await import('xmlschema.js');
	const factory = (mod.default ?? mod) as (xsd: string) => {
		validate: (xml: string) => Promise<unknown>;
	};

	try {
		const validator = factory(xsdText);
		const raw = await validator.validate(xmlText);
		if (!raw || typeof raw !== 'object') {
			return {
				valid: false,
				message: 'Validation failed.',
				errors: [{ message: 'Validation failed.' }],
				warnings: []
			};
		}

		const result = raw as {
			valid?: boolean;
			message?: string;
			errors?: string[];
			warnings?: string[];
		};

		const valid = Boolean(result.valid);
		const errors = (result.errors ?? []).map((e) => issueFromError(String(e)));
		const warnings = (result.warnings ?? []).map((w) => String(w));

		return {
			valid,
			message: result.message
				? String(result.message)
				: valid
					? 'XML is valid.'
					: 'XML is invalid.',
			errors,
			warnings
		};
	} catch (err) {
		const message = err instanceof Error ? err.message : 'XSD validation failed';
		return {
			valid: false,
			message,
			errors: [{ message }],
			warnings: []
		};
	}
}
