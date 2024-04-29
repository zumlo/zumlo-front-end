import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZValidationService } from '../../services/z-validator/z-validation.service';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-checkbox',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-checkbox.component.html',
  styleUrl: './z-checkbox.component.scss',
})
export class ZCheckboxComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() config!: any;
  @Input() markAsDirty!: boolean;
  @Output() changed = new EventEmitter();

  validations: any = {};
  control!: any;

  constructor(private _validator: ZValidationService) { }

  ngOnInit(): void {
    this._initialize(); // for initial function calls for set the controls.
  }

  // validations and set value if user sent it from the .ts file.
  _initialize() {
    this.control = this.group.controls[this.config.key];
    this.validations = this._validator.getValidations(this.config.validations || {});
    this.control.setValidators(this.validations);
    this.control.setValue(this.config?.value);
  }

  // Value emit from children to parent component for getting the checkbox value.
  showOptions(event: any) {
    this.changed.emit({
      "action": "valueChanged",
      "value": event,
      "event": event,
      "control": this.config.key
    })
  }
}
