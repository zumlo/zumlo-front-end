import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UiModule],
  exports: [HeaderComponent]
})
export class MainLayoutModule {}
