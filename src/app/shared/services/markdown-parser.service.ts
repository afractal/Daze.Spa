import { Injectable } from '@angular/core';
import { highlightAuto } from 'highlight.js';
import { setOptions, parse } from 'marked';

@Injectable()
export class MarkdownParserService {
    constructor() {
        setOptions({
            gfm: true,
            sanitize: true,
            tables: true,
            breaks: true,
            highlight: code => {
                return highlightAuto(code).value;
            }
        });
    }

    convertToHtml(markdown: string) {
        return parse(markdown);
    }
}
