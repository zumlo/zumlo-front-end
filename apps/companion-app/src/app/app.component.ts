import { Component } from '@angular/core';

@Component({
  selector: 'z-root',
  template: `<z-loader></z-loader><router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'Zumlo';
}
