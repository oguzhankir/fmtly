export type XPathResultNode = {
	type: 'element' | 'attribute' | 'text' | 'other';
	label: string;
	value: string;
	path: string;
};

export type XPathQueryResult =
	| { success: true; nodes: XPathResultNode[]; count: number; resultType: string }
	| { success: false; error: string };

export function xpathQuery(xml: string, expression: string): XPathQueryResult {
	if (!xml.trim() || !expression.trim()) {
		return { success: true, nodes: [], count: 0, resultType: 'nodeset' };
	}

	try {
		const parser = new DOMParser();
		const doc = parser.parseFromString(xml, 'application/xml');

		const parseError = doc.querySelector('parsererror');
		if (parseError) {
			return { success: false, error: 'XML is not well-formed. Fix XML errors before running XPath.' };
		}

		const nsResolver = buildNamespaceResolver(doc);

		// Probe result type with ANY_TYPE first, then re-evaluate with the right concrete type
		let probeResult: XPathResult;
		try {
			probeResult = doc.evaluate(expression, doc, nsResolver, XPathResult.ANY_TYPE, null);
		} catch (err) {
			return { success: false, error: `Invalid XPath expression: ${(err as Error).message}` };
		}

		const nodes: XPathResultNode[] = [];
		let resultType = 'unknown';

		switch (probeResult.resultType) {
			case XPathResult.NUMBER_TYPE: {
				resultType = 'number';
				nodes.push({
					type: 'other',
					label: 'Number',
					value: String(probeResult.numberValue),
					path: expression
				});
				break;
			}
			case XPathResult.STRING_TYPE: {
				resultType = 'string';
				nodes.push({
					type: 'text',
					label: 'String',
					value: probeResult.stringValue,
					path: expression
				});
				break;
			}
			case XPathResult.BOOLEAN_TYPE: {
				resultType = 'boolean';
				nodes.push({
					type: 'other',
					label: 'Boolean',
					value: String(probeResult.booleanValue),
					path: expression
				});
				break;
			}
			default: {
				// Re-evaluate as snapshot for reliable cross-environment iteration
				resultType = 'nodeset';
				let snapshotResult: XPathResult;
				try {
					snapshotResult = doc.evaluate(
						expression,
						doc,
						nsResolver,
						XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
						null
					);
				} catch (err) {
					return { success: false, error: `Invalid XPath expression: ${(err as Error).message}` };
				}
				const len = snapshotResult.snapshotLength;
				for (let i = 0; i < len; i++) {
					const node = snapshotResult.snapshotItem(i);
					if (node) nodes.push(domNodeToResult(node));
				}
				break;
			}
		}

		return { success: true, nodes, count: nodes.length, resultType };
	} catch (err) {
		return { success: false, error: (err as Error).message ?? 'XPath evaluation failed' };
	}
}

function buildNamespaceResolver(doc: Document): XPathNSResolver {
	const root = doc.documentElement;
	const map: Record<string, string> = {};

	if (root) {
		const attrs = root.attributes;
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			if (attr.name === 'xmlns') {
				map[''] = attr.value;
			} else if (attr.name.startsWith('xmlns:')) {
				const prefix = attr.name.slice(6);
				map[prefix] = attr.value;
			}
		}
	}

	return {
		lookupNamespaceURI: (prefix: string | null): string | null => {
			if (prefix === null) return map[''] ?? null;
			return map[prefix] ?? null;
		}
	};
}

function domNodeToResult(node: Node): XPathResultNode {
	switch (node.nodeType) {
		case Node.ELEMENT_NODE: {
			const el = node as Element;
			const serializer = new XMLSerializer();
			let value: string;
			try {
				value = serializer.serializeToString(el);
			} catch {
				value = el.outerHTML ?? `<${el.tagName}>`;
			}
			return {
				type: 'element',
				label: el.tagName,
				value,
				path: getNodePath(el)
			};
		}
		case Node.ATTRIBUTE_NODE: {
			const attr = node as Attr;
			return {
				type: 'attribute',
				label: `@${attr.name}`,
				value: attr.value,
				path: `${getNodePath(attr.ownerElement)}/@${attr.name}`
			};
		}
		case Node.TEXT_NODE: {
			const text = node as Text;
			return {
				type: 'text',
				label: '#text',
				value: text.nodeValue ?? '',
				path: getNodePath(text.parentElement) + '/text()'
			};
		}
		default: {
			return {
				type: 'other',
				label: `#${node.nodeName}`,
				value: node.nodeValue ?? node.textContent ?? '',
				path: ''
			};
		}
	}
}

function getNodePath(node: Element | null): string {
	if (!node) return '';
	const parts: string[] = [];
	let current: Element | null = node;
	while (current && current.nodeType === Node.ELEMENT_NODE) {
		let index = 1;
		let sibling = current.previousElementSibling;
		while (sibling) {
			if (sibling.tagName === current.tagName) index++;
			sibling = sibling.previousElementSibling;
		}
		const hasMultiple = current.parentElement
			? Array.from(current.parentElement.children).filter(
					(c) => c.tagName === current!.tagName
			  ).length > 1
			: false;
		parts.unshift(hasMultiple ? `${current.tagName}[${index}]` : current.tagName);
		current = current.parentElement;
	}
	return '/' + parts.join('/');
}

export const xpathSamples: Array<{ label: string; expression: string }> = [
	{ label: 'All books', expression: '//book' },
	{ label: 'First book', expression: '//book[1]' },
	{ label: 'Available books', expression: '//book[@available="true"]' },
	{ label: 'All titles', expression: '//title' },
	{ label: 'Title text nodes', expression: '//title/text()' },
	{ label: 'Books after 1950', expression: '//book[year > 1950]' },
	{ label: 'Count books', expression: 'count(//book)' },
	{ label: 'First author text', expression: '(//author/text())[1]' },
	{ label: 'All @id attributes', expression: '//@id' },
	{ label: 'Root element name', expression: 'local-name(/*)' }
];
