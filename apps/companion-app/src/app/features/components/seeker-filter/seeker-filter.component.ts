import { Component, EventEmitter, Output } from '@angular/core';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';
import { FormGroup } from '@angular/forms';
import { DynamicFieldDirective, ZFormCreationService, ZSimpleButtonComponent, filters } from '@zumlo/ui';

@Component({
  selector: 'z-seeker-filter',
  standalone: true,
  imports: [UiModule, DynamicFieldDirective, ZSimpleButtonComponent],
  templateUrl: './seeker-filter.component.html',
  styleUrl: './seeker-filter.component.scss',
})
export class SeekerFilterComponent {
  form!: FormGroup;
  configs: any = filters;
  @Output() onClose = new EventEmitter;
  @Output() setFilters = new EventEmitter;

  constructor(formCreator: ZFormCreationService) {
    this.form = formCreator.getFormGroup(this.configs);
  }

  close() {
    this.onClose.emit(true);
  }

  valueChanged(event: any) {
    // this.isValid = event.value.checked;
  }

  applyFilter() {
    this.setFilters.emit(this.form)
  }

  clearFilter() {
    this.form.reset();
    this.setFilters.emit(this.form)
  }

}
