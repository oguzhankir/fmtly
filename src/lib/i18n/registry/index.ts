import ar from './ar.js';
import bn from './bn.js';
import de from './de.js';
import en from './en.js';
import es from './es.js';
import fr from './fr.js';
import hi from './hi.js';
import it from './it.js';
import ja from './ja.js';
import ko from './ko.js';
import pt from './pt.js';
import ru from './ru.js';
import tr from './tr.js';
import ur from './ur.js';
import zh from './zh.js';

export const registries: Record<string, Record<string, string>> = {
	ar,
	bn,
	de,
	en,
	es,
	fr,
	hi,
	it,
	ja,
	ko,
	pt,
	ru,
	tr,
	ur,
	zh
};

export default registries;
