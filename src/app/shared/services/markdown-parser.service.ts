import { Injectable } from '@angular/core';
import * as highlight from 'highlight.js';
import * as marked from 'marked';

@Injectable()
export class MarkdownParserService {
    private md: MarkedStatic;
    constructor() {
        this.md = marked;
        this.md.setOptions({
            gfm: true,
            sanitize: true,
            tables: true,
            breaks: true,
            highlight: (code) => {
                return highlight.highlightAuto(code).value;
            }
        });

    }

    convertToHtml(markdown: string) {
        return this.md.parse(markdown);
    }
}