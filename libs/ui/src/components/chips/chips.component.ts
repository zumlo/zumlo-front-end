import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UiModule } from '../../modules/ui/ui.module';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';

export interface wellnessPlan {
  name: string;
}

@Component({
  selector: 'z-chips',
  standalone: true,
  imports: [UiModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
})
export class ChipsComponent {
  @Input() group!: FormGroup;
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  @Input() markAsDirty!: boolean;
  addOnBlur = true;
  errorMessage: string = '';
  validations: any = {};
  control!: any;


  constructor(private _validator: ZValidationService) { }
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  plan: wellnessPlan[] = [];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.plan.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(event: wellnessPlan): void {
    const index = this.plan.indexOf(event);

    if (index >= 0) {
      this.plan.splice(index, 1);

      this.announcer.announce(`Removed ${event}`);
    }
  }

  edit(plan: wellnessPlan, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(plan);
      return;
    }

    // Edit existing plan
    const index = this.plan.indexOf(plan);
    if (index >= 0) {
      this.plan[index].name = value;
    }
  }
 

  

  ngOnInit(): void {
    this._initialize();  // for initial function calls for set the controls.
  }

  // validations  and set value if user sent it from the .ts file.
  _initialize() {
    this.control = this.group.controls[this.config.key];
    this.control.setValue(this.config.value || '');
    this.validations = this._validator.getValidations(this.config.validations || {});
    this.control.setValidators(this.validations);
  }

  // checking the errors for formControls.
  checkErrors() {
    if (this.control.valid)
      return;

    setTimeout(() => {
      this.control.markAllAsTouched();
      this.control.markAsDirty();
    })

    return this._validator.getErrorMessage(this.control, this.config);
  }
}
