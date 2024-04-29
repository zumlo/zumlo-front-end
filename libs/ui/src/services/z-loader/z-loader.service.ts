import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZLoaderService {
  // Show spinner and hide dynamically through the component.
  
  public spinner = new Subject<boolean>();
  public spinnerObservable$ = this.spinner.asObservable();

  constructor() { }

  showSpinner() {
    this.spinner.next(true);
  }

  hideSpinner() {
    this.spinner.next(false);
  }
}