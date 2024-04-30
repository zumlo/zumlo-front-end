import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ZDialogComponent, ZStorageService } from '@zumlo/ui';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu: boolean = false;
  showProfile: boolean = false;
  showSearch: boolean = false;
  searchText!: any

  @ViewChild('navbarToggleButton') navbarToggleButton!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private _router: Router,
    private storageService: ZStorageService,
    private dialog: MatDialog
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.navbarToggleButton?.nativeElement) {
        this.showMenu = false;
      }
    });
  }

  toogleBtn() {
    this.showMenu = !this.showMenu;
  }

  inputToggle() {
    this.showSearch = !this.showSearch;
    this.searchText = ''; // Clear the input value when closing the input field
    if (!this.showMenu) {
    }
  }


  profileBtn() {
    this.showProfile = !this.showProfile;
  }

  logout() {
    let dialogRef = this.dialog.open(ZDialogComponent, {
      width: '400px',
      data: {
        heading: 'Are you sure?',
        label: 'You want to sign out?',
        cancelButton: 'Cancel',
        confirmButton: 'Sure',
      },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) this.storageService.clearSessionStorage();
      this._router.navigateByUrl('/auth');
    });
  }
}
