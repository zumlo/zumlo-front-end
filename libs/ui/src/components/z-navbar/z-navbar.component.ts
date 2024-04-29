import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-navbar',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-navbar.component.html',
  styleUrl: './z-navbar.component.scss',
})
export class ZNavbarComponent implements OnInit {

  @Input() menuItems: any[] = [];
  @ContentChild('menuItem') menuTemplate!: TemplateRef<any>;
  @ContentChild('menuButton') buttonTemplate!: TemplateRef<any>;
  
  showToogleButton: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  // dynamically classes added on toggle.
  toggle() {
    this.showToogleButton = !this.showToogleButton;
  }
}
