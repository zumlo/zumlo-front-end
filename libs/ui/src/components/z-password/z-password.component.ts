import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  focus: boolean = false;
  errorMessage: string = '';
  validations: any = {};
  control!: any;

  constructor(private _validator: ZValidationService) {}

  ngOnInit(): void {
    this._initialize(); // for initial function calls for set the controls.
  }

  // validations  and set value if user sent it from the .ts file.
  _initialize() {
    this.control = this.group.controls[this.config.key];
    this.control.setValue(this.config.value || '');
    this.validations = this._validator.getValidations(
      this.config.validations || {}
    );
    this.control.setValidators(this.validations);
  }

  // checking the errors for formControls.
  checkErrors() {
    if (this.control.valid) return;

    setTimeout(() => {
      this.control.markAllAsTouched();
      this.control.markAsDirty();
    });

    return this._validator.getErrorMessage(this.control, this.config);
  }

  onFocus() {
    this.focus = true;
  }

  // On focus out from the input this function will check the errors and removing the space if the user added only space in the required field.
  onInputBlur() {
    this.focus = false;
    this.control.setValue(this.control?.value?.trim());
    this.errorMessage = this.checkErrors();
  }

  // show/hide icon for password.
  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  checkPattern(field: any) {
    const value = this.control.value;
    let messages: any = [
      {
        message: field.patternMessageTwo.uppercase,
        isMatched: value.match(/[A-Z]/) !== null,
      },
      {
        message: field.patternMessageTwo.lowercase,
        isMatched: value.match(/[a-z]/) !== null,
      },
      {
        message: field.patternMessageTwo.number,
        isMatched: value.match(/[0-9]/) !== null,
      },
      {
        message: field.patternMessageTwo.specialCharacter,
        isMatched: value.match(/[^A-Za-z0-9]/) !== null,
      },
      {
        message: field.patternMessageTwo.Min,
        isMatched: value.length >= 8,
      }
    ];

    return messages;
  }
}
