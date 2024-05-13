import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  isActive: boolean = false;
  constructor(private elementRef: ElementRef) { }

  // Function to toggle display status
  toggleActive(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      // Add event listener when the profile is shown
      document.addEventListener('click', this.closeProfileOnOutsideClick.bind(this));
    } else {
      // Remove event listener when the profile is hidden
      document.removeEventListener('click', this.closeProfileOnOutsideClick.bind(this));
    }
  }

  closeProfileOnOutsideClick(event: MouseEvent) {
    // Check if the click is outside the profile details
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isActive = false;
    }
  }
}
