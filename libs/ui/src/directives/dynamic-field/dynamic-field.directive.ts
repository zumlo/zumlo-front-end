import { ComponentRef, Directive, EventEmitter, Input, OnChanges, OnInit, Output, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZInputTextComponent } from './../../components/z-input-text/z-input-text.component';
import { ZTextareaComponent } from '../../components/z-textarea/z-textarea.component';
import { ZCheckboxComponent } from '../../components/z-checkbox/z-checkbox.component';
import { ZInputMaskComponent } from '../../components/z-phone-no/z-input-mask.component';
import { ZDropdownComponent } from '../../components/z-dropdown/z-dropdown.component';
import { ZDialogComponent } from '../../components/z-dialog/z-dialog.component';
import { ZPasswordComponent } from '../../components/z-password/z-password.component';
import { ZInputNumberComponent } from '../../components/z-input-number/z-input-number.component';
import { DynamicFieldType } from '../../models/dynamicField';

// dynamically fields as according to key.
const DYNAMIC_FIELDS: { [type: string]: Type<DynamicFieldType> } = {
  'dropdown': ZDropdownComponent,
  'text': ZInputTextComponent,
  'textArea': ZTextareaComponent,
  'checkbox': ZCheckboxComponent,
  'tel': ZInputMaskComponent,
  'email': ZInputTextComponent,
  'password': ZPasswordComponent,
  'number': ZInputNumberComponent
}

@Directive({
  selector: '[zDynamicField]',
  standalone: true,
})
export class DynamicFieldDirective implements OnChanges, OnInit {
  @Input() group!: FormGroup;
  @Input() config!: any;
  @Input() markAsDirty!: boolean;
  @Output() valueChanged = new EventEmitter();

  component!: ComponentRef<DynamicFieldType>;

  constructor(private componentCreator: ViewContainerRef) { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.component) {
      this._initializeComponent();
      return;
    }
    this._createComponent();
  }

  // create component dynamically.
  private _createComponent(): void {
    this.component = this.componentCreator.createComponent(DYNAMIC_FIELDS[this.config.type]);
    this.component.location.nativeElement.classList.add(`z-form-control`);
    this._initializeComponent();
  }

  // create formGroup & formControl.
  private _initializeComponent() {
    this.component.instance.group = this.group;
    this.component.instance.config = this.config;
    this.component.instance.markAsDirty = this.markAsDirty;

    this.component.instance.changed.subscribe((event: any) => {
      this.valueChanged.emit(event); //helps to emit the value through component instance.
    });
  }
}
