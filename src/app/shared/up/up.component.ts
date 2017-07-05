import { Component, OnInit, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'up',
    templateUrl: './up.template.html',
    styleUrls: ['./up.style.css']
})
export class UpComponent implements OnInit {
    constructor(private readonly _router: Router) { }

    @ViewChild('up') _selector: ElementRef;

    ngAfterViewInit() {
        this._onWindowScroll();
    }

    @HostListener('window:scroll')
    _onWindowScroll(): void {
        let el = this._selector.nativeElement as HTMLElement;
        el.scrollIntoView(true);
        console.log(el);
        window.scroll(undefined, 1);
        // window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    }

    position: number = 400;
    showSpeed: number = 500;
    moveSpeed: number = 1000;

    onUpClick() {
        let el = this._selector.nativeElement as HTMLElement;
        el.scrollIntoView(true);
        // window.scrollTo(0, 0);
        // window.scroll(undefined, 1);
    }

    ngOnInit() {
        // this._router.events.subscribe(evt => {
        //     if (evt instanceof NavigationEnd) {
        //         window.scrollTo(0, 0);
        //     }
        // });
    }
}