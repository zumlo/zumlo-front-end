import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { CommonMethodsService } from '../../services/z-common-restriction/common-methods.service';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-input-number',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-input-number.component.html',
  styleUrl: './z-input-number.component.scss',
})
export class ZInputNumberComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  @Input() markAsDirty!: boolean;

  validations: any = {};
  control!: any;
  errorMessage: string = '';

  constructor(private _validator: ZValidationService, private commonMethods: CommonMethodsService) { }

  ngOnInit(): void {
    this._initialize(); // for initial function calls for set the controls.
  }

  // validations and set value if user sent it from the .ts file.
  _initialize() {
    this.control = this.group.controls[this.config.key];
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

  // restriction some keys.
  restrictFunction(event: any) {
    let response = this.commonMethods.restrictCharacters(event);
    return response;
  }

  // On focus out from the input this function will check the errors and removing the space if the user added only space in the required field.
  onInputBlur() {
    this.control.setValue(this.control?.value?.trim());
    this.errorMessage = this.checkErrors();
  }
}
