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

  constructor(private dialog: MatDialog, private renderer: Renderer2, private _router: Router, private storageService: ZStorageService, private _eref: ElementRef) {
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
    if (this.showProfile) {
      // Add event listener when the profile is shown
      document.addEventListener('click', this.closeProfileOnOutsideClick.bind(this));
    } else {
      // Remove event listener when the profile is hidden
      document.removeEventListener('click', this.closeProfileOnOutsideClick.bind(this));
    }
  }

  closeProfileOnOutsideClick (event: MouseEvent) {
    // Check if the click is outside the profile details
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showProfile = false;
    }
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
      if (res != undefined) this.storageService.clearSessionStorage(); this._router.navigateByUrl('/auth');
    });
  }
}
