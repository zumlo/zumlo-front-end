
import { Component, Input } from '@angular/core';
import { SeekerDashboardService } from '@zumlo/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'z-seeker-dashboard',
  templateUrl: './seeker-dashboard.component.html',
  styleUrl: './seeker-dashboard.component.scss',
})
export class SeekerDashboardComponent {
  seekerDashboard:any=[];
  @Input() config!: any;

  constructor(private _route: Router, private _service:SeekerDashboardService){
    this._service.getSeekerDashboard().subscribe((res:any) => {
        this.seekerDashboard = res;
      })
    }
  emitButton(event: any) {
      const widgetKey = event?.widgetKey;
      switch (widgetKey) {
        case 'statistics':
          // Define the route for widgetKey
          this._route.navigateByUrl('vdvds');
          break;
        case 'viewSeeker':
          // Define the route for widgetKey
          this._route.navigateByUrl('/seeker-listing-grid');
          break;
        case 'wellnessPlan':
          // Define the route for widgetKey
          this._route.navigateByUrl('dsv');
          break;
        case 'assessment':
          // Define the route for widgetKey
          this._route.navigateByUrl('dsv');
          break;
        default:
          break;
      }
    }
}