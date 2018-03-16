import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private rd: Renderer2) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = "gray";
    this.el.nativeElement.style.color = "white";

    // Xài Renderer2, tương tự ở trên nhưng rõ ràng hơn
    this.rd.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.rd.setStyle(this.el.nativeElement, 'font-weight', '700');
  }
  // Định nghĩa event (tương tự jQuery)
  @HostListener('mouseenter') HoverEvent(eventData: Event) {
    this.rd.setStyle(this.el.nativeElement, 'font-size', '30px');
  }
  @HostListener('mouseleave') OutEvent(eventData: Event) {
    this.rd.setStyle(this.el.nativeElement, 'font-size', '20px');
  }

  // Ràng buộc thuộc tính border của element bằng một biến cụ thể
  // giúp code gọn và dễ hiểu hơn
  @HostBinding('style.border') borderE:string = '2px solid purple';
  @HostListener('mouseenter') HoverEvent1(eventData: Event) {
    this.borderE = 'none';
  }
  @HostListener('mouseleave') OutEvent1(eventData: Event) {
    this.borderE = '2px solid purple';
  }
}
