import { ValidatorFn } from '@angular/forms';
export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name?: string;
  options?: any[];
  placeholder?: string;
  type: string;
  fieldType?: string;
  validation?: ValidatorFn[];
  value?: any;
  class?: string;
  min?: boolean;
  max?: boolean;
  isRequired?: string;
  hidden?: boolean;
  error?: boolean;
  hint?: string;
  fieldRequired?: string;
  key?: string;
  patternMessage?:string;
  patternMessageTwo?: {
    uppercase?: string,
    lowercase?: string,
    number?: string,
    specialCharacter?: string,
    Min?: string;
  };
  icons?: string;
  validations?: {
    required?: boolean;
    noWhiteSpace?: boolean;
    maxlength?: number;
    pattern?: any;
    minlength?: number;
  };
  multiple?: boolean;
  maxMessage?: string;
  mask?: string;
  readonly?: boolean;
  notMatch?: string;
}