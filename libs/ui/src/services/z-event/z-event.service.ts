import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZEventService {

  // Observable for scroll user can subscribe that if user wants to use the scroll in the page.
  // Note we are not using this as of now will use in future scope. 
  scroll: Subject<any> = new Subject();
  scrollObservable$ = this.scroll.asObservable();
  
  constructor() { }
}
