import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZStorageService } from '@zumlo/ui';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu: boolean = false;
  showProfile: boolean = false;
  showSearch: boolean = false;

  @ViewChild('navbarToggleButton') navbarToggleButton!: ElementRef;

  constructor(private renderer: Renderer2, private _router: Router, private storageService: ZStorageService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.navbarToggleButton?.nativeElement) {
        this.showMenu = false;
      }
    });
  }

  toogleBtn() {
    this.showMenu = !this.showMenu;
  }

  profileBtn() {
    this.showProfile = !this.showProfile;
  }

  logout() {
    this.storageService.clearSessionStorage();
    this._router.navigateByUrl('/auth');
  }
}
