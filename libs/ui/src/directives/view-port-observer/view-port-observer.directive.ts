import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[zViewPortObserver]',
  standalone: true,
})
export class ZViewPortObserverDirective implements OnInit {
  @Input('zViewPortObserver') className = 'z-active-section';
  @Input() threshold!: number;
  @Output() inViewPort = new EventEmitter();

  @Input() disable: boolean = false;
  private observer!: any;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // This will helps to add the classes dynamically when user scrolls on the marketing page. 
    this.observer = new IntersectionObserver(entries => {
      if(this.disable) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) { // checking view port.
          this.renderer.addClass(this.elRef.nativeElement, this.className);
          this.inViewPort.emit({ele: this.elRef, entry: entry});
        } else {
          this.renderer.removeClass(this.elRef.nativeElement, this.className);
        }
      });
    }, { threshold: typeof this.threshold == 'number' ? this.threshold : 0.5 });

    this.observer.observe(this.elRef.nativeElement);
  }
}