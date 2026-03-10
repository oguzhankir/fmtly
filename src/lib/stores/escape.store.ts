import { writable, get } from 'svelte/store';
import { input } from './input.store';
import { output } from './output.store';
import { addToast } from './toast.store';
import {
    escapeHTML,
    escapeJavaScript,
    escapeJSON,
    escapeXML,
    escapeSql,
    escapeCsv,
    escapeShell
} from '../engines/escaper';

export const escapeOptions = writable({
    sqlDialect: 'postgres' as 'mysql' | 'postgres' | 'sqlite'
});

let currentToolSlug = '';

export function initEscapeStore(toolSlug: string) {
    currentToolSlug = toolSlug;

    processEscape(get(input));
}

let timeoutId: ReturnType<typeof setTimeout>;

export const processEscape = async (val: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        if (!val) {
            output.set('');
            return;
        }

        try {
            let result = '';
            const opts = get(escapeOptions);

            switch (currentToolSlug) {
                case 'html':
                    result = escapeHTML(val);
                    break;
                case 'javascript':
                    result = escapeJavaScript(val);
                    break;
                case 'json':
                    result = escapeJSON(val);
                    break;
                case 'xml':
                    result = escapeXML(val);
                    break;
                case 'sql':
                    result = escapeSql(val, opts.sqlDialect);
                    break;
                case 'csv':
                    result = escapeCsv(val);
                    break;
                case 'shell':
                    result = escapeShell(val);
                    break;
            }

            if (result) {
                output.set(result);
            }
        } catch (e: any) {
            console.error('Escaper error:', e);
        }
    }, 150);
};

// Listeners
input.subscribe((val) => {
    if (['html', 'javascript', 'json', 'xml', 'sql', 'csv', 'shell'].includes(currentToolSlug)) {
        processEscape(val);
    }
});

escapeOptions.subscribe(() => {
    if (['sql'].includes(currentToolSlug) && get(input)) {
        processEscape(get(input));
    }
});
