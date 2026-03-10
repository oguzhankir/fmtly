import { writable, get } from 'svelte/store';
import { input } from './input.store';
import { output } from './output.store';
import {
    sortLines, deduplicateLines, reverseLines, trimLines,
    cleanWhitespace, markdownToHtml, htmlToMarkdown, reverseText
} from '../engines/text/text.engine';
import { addToast } from './toast.store';

// Options state
export const textOptions = writable({
    // sort options
    sortDirection: 'asc' as 'asc' | 'desc',
    sortMode: 'alpha' as 'alpha' | 'numeric' | 'length',
    caseSensitive: false,

    // whitespace options
    trimLines: true,
    collapseSpaces: true,
    normalizeNewlines: true,
    removeBlankLines: true,

    // reverser options
    reverserMode: 'chars' as 'chars' | 'words' | 'lines',

    // markdown options
    markdownPreview: true
});

let currentToolSlug = '';

export function initTextStore(toolSlug: string) {
    currentToolSlug = toolSlug;
    processText(get(input));
}

let timeoutId: ReturnType<typeof setTimeout>;

export const processText = async (val: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
        if (!val) {
            output.set('');
            return;
        }

        try {
            const opts = get(textOptions);
            let result = val;

            switch (currentToolSlug) {
                case 'line-sorter':
                    result = sortLines(val, {
                        direction: opts.sortDirection,
                        mode: opts.sortMode,
                        caseSensitive: opts.caseSensitive
                    });
                    break;
                case 'deduplicate':
                    result = deduplicateLines(val, opts.caseSensitive);
                    break;
                case 'whitespace':
                    result = cleanWhitespace(val, {
                        trimLines: opts.trimLines,
                        collapseSpaces: opts.collapseSpaces,
                        normalizeNewlines: opts.normalizeNewlines,
                        removeBlankLines: opts.removeBlankLines
                    });
                    break;
                case 'markdown-to-html':
                    // This returns raw HTML. If preview is enabled, the UI decides to render it safely
                    result = await markdownToHtml(val);
                    break;
                case 'html-to-markdown':
                    result = await htmlToMarkdown(val);
                    break;
                case 'reverser':
                    result = reverseText(val, opts.reverserMode);
                    break;
            }

            output.set(result);
        } catch (e) {
            console.error(e);
            addToast('error', 'Error processing text');
        }
    }, 300);
};

// Subscribe to input and options changes
input.subscribe(val => {
    if (currentToolSlug) {
        processText(val);
    }
});

textOptions.subscribe(() => {
    if (currentToolSlug && get(input)) {
        processText(get(input));
    }
});
