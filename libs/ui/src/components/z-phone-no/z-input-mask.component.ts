import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { FormGroup } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-input-mask',
  standalone: true,
  imports: [UiModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './z-input-mask.component.html',
  styleUrl: './z-input-mask.component.scss',
})
export class ZInputMaskComponent implements OnInit {

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
  
    // On focus out from the input this function will check the errors.
  onInputBlur() {
    this.errorMessage = this.checkErrors();
  }
}
