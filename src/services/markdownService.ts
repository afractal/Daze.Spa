import { highlightAuto } from 'highlight.js';
import { setOptions, parse } from 'marked';

export const parseToHtml = (markdown: string) => {
    setOptions({
        gfm: true,
        sanitize: true,
        tables: true,
        breaks: true,
        highlight: code => {
            return highlightAuto(code).value;
        }
    });
    return parse(markdown);
};
