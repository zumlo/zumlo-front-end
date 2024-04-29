import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-textarea',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-textarea.component.html',
  styleUrl: './z-textarea.component.scss',
})
export class ZTextareaComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() config!: any;
  @Input() markAsDirty!: boolean;
  @Output() changed = new EventEmitter();

  errorMessage: string = ''; 
  validations: any = {};
  control!: any;

  constructor(private _validator: ZValidationService) { }

  ngOnInit(): void {
    this._initialize(); // for initial function calls for set the controls.
  }

  // validations  and set value if user sent it from the .ts file.
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

  // On focus out from the input this function will check the errors and removing the space if the user added only space in the required field.
  setInputFocus(event: any, control: FormControl) {
    control.setValue(control?.value?.trim());
    this.errorMessage = this.checkErrors();
  }
}
