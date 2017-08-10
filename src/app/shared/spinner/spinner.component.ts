import { Component, Input } from '@angular/core';
import * as NProgress from 'nprogress';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.template.html'
})
export class SpinnerComponent {
    @Input()
    set isSpinning(value: boolean) {
        NProgress.configure({
            showSpinner: false,
            minimum: 0.1,
            speed: 500,
            trickleSpeed: 100
        });
        value ? NProgress.start() : NProgress.done();
    }
}
