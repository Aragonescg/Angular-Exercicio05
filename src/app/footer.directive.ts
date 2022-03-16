import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFooter]'
})
export class FooterDirective {

  constructor(private render: Renderer2, private el: ElementRef) {
    this.render.addClass(this.el.nativeElement, 'diretiva')
   }

}
