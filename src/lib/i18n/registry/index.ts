import de from './de.js';
import en from './en.js';
import es from './es.js';
import fr from './fr.js';
import it from './it.js';
import tr from './tr.js';

export const registries: Record<string, Record<string, string>> = {
	de,
	en,
	es,
	fr,
	it,
	tr
};

export default registries;
