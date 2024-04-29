import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'z-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @Output() sendClassToBase = new EventEmitter;

  sectionId!: string;
  highlightedClass!: string;

  constructor() { }

  ngOnInit(): void { }

  // On scrolls getting the ID.
  scrollTo(event: any): void {
    this.sectionId = '';
    setTimeout(() => this.sectionId = event?.id);
  }

  // highlighted the class when user scrolls it will reflect to the header menu bar.
  className(event: any) {
    this.highlightedClass = event;
  }

  // Send class name to parent file.
  classAddOnParent(event: any) {
    this.sendClassToBase.emit(event);
  }
}
