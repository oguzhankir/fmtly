import { get, writable } from 'svelte/store';
import {
	formatNumber,
	fromRoman,
	fromScientific,
	toRoman,
	toScientific
} from '../engines/number/number.engine';
import { input } from './input.store';
import { output } from './output.store';
import { addToast } from './toast.store';

import { browser } from '$app/environment';

// Options state
export const numberOptions = writable({
	locale: browser ? navigator.language : 'en-US',
	decimals: 2,
	useGrouping: true
});

let currentToolSlug = '';

export function initNumberStore(toolSlug: string) {
	currentToolSlug = toolSlug;
	processNumber(get(input));
}

let timeoutId: ReturnType<typeof setTimeout>;

export const processNumber = async (val: string) => {
	clearTimeout(timeoutId);
	timeoutId = setTimeout(async () => {
		if (!val) {
			output.set('');
			return;
		}

		try {
			const opts = get(numberOptions);
			let result = '';

			switch (currentToolSlug) {
				case 'formatter': {
					const formatted = formatNumber(val, {
						locale: opts.locale,
						decimals: opts.decimals,
						useGrouping: opts.useGrouping
					});
					result = formatted.value;
					break;
				}

				case 'roman':
					// Bidirectional tool mapping.
					// Input usually has a direction toggle or we dynamically guess direction
					// Assuming val is arabic to roman based on normal direction
					result = toRoman(Number(val));
					break;

				case 'scientific':
					result = toScientific(val);
					break;

				// percentage is handled exclusively by its custom Panel so it doesn't need to process via standard store output
			}

			if (result) {
				output.set(result);
			}
		} catch (e: any) {
			console.error(e);
			// Optionally, handle valid input states gracefully rather than toasting explicitly on every keystroke
			output.set('Invalid input or out of bounds');
		}
	}, 200);
};

// React to input typing
input.subscribe((val) => {
	if (['formatter', 'roman', 'scientific'].includes(currentToolSlug)) {
		processNumber(val);
	}
});

// React to option changes
numberOptions.subscribe(() => {
	if (['formatter', 'roman', 'scientific'].includes(currentToolSlug) && get(input)) {
		processNumber(get(input));
	}
});
