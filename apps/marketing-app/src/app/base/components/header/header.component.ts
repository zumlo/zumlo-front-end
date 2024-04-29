import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { headerMenu } from '../../../utils/header-menu';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnChanges, AfterViewInit, OnInit {

  @Output() scrollTo = new EventEmitter;
  @Output() classAddOnParent = new EventEmitter;
  
  @ViewChild('navbarToggleButton') navbarToggleButton!: ElementRef;

  initialScrollPosition: boolean = false;
  toogleBtn: boolean = false;
  scrollPositions!: any;
  highlightedClass!: string;
  headerkeys: any = Object.keys(headerMenu);
  headerData: any = headerMenu;
  currentScroll!: number;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.navbarToggleButton?.nativeElement) {
        this.toogleBtn = false;
        this.classAddOnParent.emit(this.toogleBtn);
      }
    });
  }

  ngOnInit(){
    this.onWindowScroll();
  }

  // On load the page getting the scroll position.
  ngAfterViewInit() {
    window.scrollTo(0, 0);

    this.scrollPositions = {
      "home": document.getElementById('home')?.getBoundingClientRect().top || 0,
      "gallery": document.getElementById('gallery')?.getBoundingClientRect().top || 0,
      "whyZumlo": document.getElementById('whyZumlo')?.getBoundingClientRect().top || 0,
      "healthcareProfessionals": document.getElementById('healthcareProfessionals')?.getBoundingClientRect().top || 0,
      "individuals": document.getElementById('individuals')?.getBoundingClientRect().top || 0,
      "joinOurJourne": document.getElementById('joinOurJourne')?.getBoundingClientRect().top || 0,
      "contactUs": document.getElementById('contactUs')?.getBoundingClientRect().top || 0,
    }
    this.cdr.detectChanges();

  }

  ngOnChanges(simple: SimpleChanges){
  }

  // emit to parent id for scrolling on header clicks.
  scrollToSection(sectionId: string): void {
    this.toogleBtn = false;
    this.scrollTo.emit({ id: sectionId });
  }

  // for header changes on scroll.
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.initialScrollPosition = (window.scrollY > 0);
    this.currentScroll = window.scrollY;
  }

  // dynamic classes added on click toogle menu.
  toogleButton() {
    this.toogleBtn = !this.toogleBtn;
    this.classAddOnParent.emit(this.toogleBtn);
  }
}
