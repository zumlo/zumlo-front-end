import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { validationConstants } from '../../utils/validation-constants';

@Injectable({
  providedIn: 'root'
})
export class ZValidationService {

  // trim white spaces.
  trimWhiteSpaces(field: any) {
    if (field.value)
      return field.value.trim();
    return field.value;
  }

  // validations check that pass through .ts file in validations.
  getValidations(validations: any) {
    const arr = [];

    for (const validation of Object.keys(validations || {})) {
      if (!validations[validation])
        continue;

      switch (validation) {
        case validationConstants.required:
          arr.push(Validators.required);
          break;
        case validationConstants.pattern:
          arr.push(Validators.pattern(validations[validation]));
          break;
        case validationConstants.maxLength:
          arr.push(Validators.maxLength(validations[validation]));
          break;
        case validationConstants.minLength:
          arr.push(Validators.min(validations[validation]));
      }
    }
    return arr;
  }

  // checking errors according to the validations.
  getErrorMessage(control: FormControl, config: any) {
    if (!control) return '';
    if (control.hasError(validationConstants.required)) {
      return config.fieldRequired
    }else if (control.hasError(validationConstants.pattern)) {
      return this._getPatternMessage(control.value, config);
    } else if(control?.hasError(validationConstants.match)) {
      if(control?.errors?.['matched'] == false)
      return 'Passwords do not match';
    }else {
      return this._getLengthMessage(control.value, config);
    }
    
  }

  // pattern error check. 
  private _getPatternMessage(value: string, config: any) {
    return config.patternMessage ? config.patternMessage : config.patternMessageTwo;
  }

  // length error check.
  private _getLengthMessage(value: string, config: any) {
    if (value.length < validationConstants.maxLengthValue && config.maxMessage) {
      return config?.maxMessage;
    } else
      return config?.notMatch;
  }
}