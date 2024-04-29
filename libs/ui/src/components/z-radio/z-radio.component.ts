import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-radio',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-radio.component.html',
  styleUrl: './z-radio.component.scss',
})
export class ZRadioComponent implements OnInit {

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
