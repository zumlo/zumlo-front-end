import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective, DynamicFieldDirective, SeekerDashboardService, ZFormCreationService, dropdown, tabGroup } from '@zumlo/ui';
import { FormGroup } from '@angular/forms';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';

@Component({
  selector: 'z-seeker-listing-card',
  standalone: true,
  imports: [ UiModule, DynamicFieldDirective, DynamicComponentDirective],
  templateUrl: './seeker-listing-card.component.html',
  styleUrl: './seeker-listing-card.component.scss',
})
export class SeekerListingCardComponent {
  config: any = tabGroup;
  seekerData: any=[];
  tableConfig: any;
  form!: FormGroup;
  configs: any = dropdown;
  isValid: boolean = false;
  seekerGrid:any;
  
  constructor(formCreator: ZFormCreationService, private _service: SeekerDashboardService){
    this.form = formCreator.getFormGroup(this.configs);
    this._service.getSeekerGrid().subscribe((res:any) => {
      this.seekerGrid = res;
    })
  }
  valueChanged(event: any) {
    this.isValid = event.value.checked;
  }
}
