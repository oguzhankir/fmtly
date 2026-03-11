import { writable, get } from 'svelte/store';
import { input } from './input.store';
import { output } from './output.store';
import { addToast } from './toast.store';
import {
	base64Encode,
	base64Decode,
	urlEncode,
	urlDecode,
	encodeHtmlEntities,
	decodeHtmlEntities
} from '../engines/encoder';

export const encodeOptions = writable({
	htmlEntitiesMode: 'named' as 'named' | 'numeric' | 'hex'
});

let currentToolSlug = '';

export function initEncodeStore(toolSlug: string) {
	currentToolSlug = toolSlug;

	// Process initial input immediately mapped
	processEncode(get(input));
}

let timeoutId: ReturnType<typeof setTimeout>;

export const processEncode = async (val: string) => {
	clearTimeout(timeoutId);
	timeoutId = setTimeout(() => {
		if (!val) {
			output.set('');
			return;
		}

		try {
			let result = '';
			const opts = get(encodeOptions);

			switch (currentToolSlug) {
				case 'base64':
					// Just fallback to base64Encode if we are acting as standard encoder side
					result = base64Encode(val);
					break;

				case 'url':
					result = urlEncode(val);
					break;

				case 'html-entities':
					result = encodeHtmlEntities(val, opts.htmlEntitiesMode);
					break;

				// Note: `unicode` is handeled via its own custom UI panel rather than straight standard output piping
			}

			if (result) {
				output.set(result);
			}
		} catch (e: any) {
			console.error('Encoder error:', e);
		}
	}, 150);
};

// Listeners
input.subscribe((val) => {
	if (['base64', 'url', 'html-entities'].includes(currentToolSlug)) {
		processEncode(val);
	}
});

encodeOptions.subscribe(() => {
	if (['html-entities'].includes(currentToolSlug) && get(input)) {
		processEncode(get(input));
	}
});
