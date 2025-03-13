import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[wbDarkenOnHover]'
})
export class DarkenOnHoverDirective {
    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer) {}

    @HostListener('mouseover')
    darkenOn(): void {
        this.setElementBrightness(this.brightness);    
    }

    @HostListener('mouseleave')
    darkenOff(): void {
        this.setElementBrightness('100%');    
    }

    setElementBrightness(value: string): void {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${value})`)
    }
}