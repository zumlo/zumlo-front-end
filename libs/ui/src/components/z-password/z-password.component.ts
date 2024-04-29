import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { FormGroup } from '@angular/forms';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-password',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-password.component.html',
  styleUrl: './z-password.component.scss',
})
export class ZPasswordComponent {
  @Input() group!: FormGroup;
  @Input() config!: any;
  @Input() markAsDirty!: boolean;
  @Output() changed = new EventEmitter();

  hide: boolean = false;
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

  // On focus out from the input this function will check the errors and removing the space if the user added only space in the required field.
  onInputBlur() {
    this.control.setValue(this.control?.value?.trim());
    this.errorMessage = this.checkErrors();
  }

  // show/hide icon for password.
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
