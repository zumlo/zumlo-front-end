import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { FormGroup } from '@angular/forms';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-dropdown',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-dropdown.component.html',
  styleUrl: './z-dropdown.component.scss',
})
export class ZDropdownComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() config!: any;
  @Input() markAsDirty!: boolean;
  @Output() changed = new EventEmitter();

  options!: any;
  control!: any;
  validations: any = {};
  errorMessage: any = '';

  constructor(private _validator: ZValidationService) {}

  ngOnInit(): void {
    this.options = this.config.options; // Bind the value in the dropdown options.
    this._initialize(); // for initial function calls for set the controls.
  }

  // validations  and set value if user sent it from the .ts file.
  _initialize() {
    this.control = this.group.controls[this.config.key];
    this.validations = this._validator.getValidations(this.config?.validations || {});
    this.control.setValidators(this.validations);
  }

  // Value emit from children to parent component.
  onChange(event: any) {
    this.changed.emit({
      value: this.config.options.find((option: any) => option.code == event.value),
      key: this.config.key
    });
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

  // On dropdown closed checking the validation.
  onDropdownClosed() {
    this.errorMessage = this.checkErrors();
  }
}
