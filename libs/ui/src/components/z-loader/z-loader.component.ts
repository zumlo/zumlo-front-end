import { Component, OnDestroy, OnInit } from '@angular/core';
import { ZLoaderService } from '../../services/z-loader/z-loader.service';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-loader',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-loader.component.html',
  styleUrl: './z-loader.component.scss',
})
export class ZLoaderComponent implements OnDestroy, OnInit {
  
  showSpinner: boolean = false;
  subscription: any;

  constructor(
    private loader: ZLoaderService) { }

  // conditionally through subscribe show/hide loader.
  ngOnInit(): void {
    this.subscription = this.loader.spinnerObservable$.subscribe({
      next: (result: any) => {
        if (result !== undefined) {
          this.showSpinner = result;
        }
      },
      error: (error: any) => {
        console.error('Error in subscription for loader ' + error);
        this.showSpinner = false;
      }
    })

  }

  // On route change it will execute and unsubscribe the subscription.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
