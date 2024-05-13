import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-date',
  standalone: true,
  providers: [provideNativeDateAdapter()], // import one of the provided date adapters.
  imports: [UiModule],
  templateUrl: './z-date.component.html',
  styleUrl: './z-date.component.scss',
})
export class ZDateComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  @Input() markAsDirty!: boolean;

  errorMessage: string = '';

  validations: any = {};
  control!: any;

  constructor(private _validator: ZValidationService) { }

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
