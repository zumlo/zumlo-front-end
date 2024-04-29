import { Injectable } from '@angular/core';
import { validationConstants } from '../../utils/validation-constants';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsService {

  constructor() { }

  // only numbers can add.
  restrictCharacters(event: any) {
    const inputKey = event.key;
    const pattern = /^[0-9]+(\.[0-9]+)?$/;
    if (inputKey.length === 1 && !pattern.test(inputKey)) {
      event.preventDefault();
    }
  }

  // only alphabets and no white space as per condition need to pass "type".
  alphabetsOnly(event: any, config: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 32) {
      return true;
    }
    else if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    } else {
      return true;
    }
  }

  // No white space in the field.
  noWhiteSpace(event: any, config: any) {
    const whiteSpaceValidation = config.validations?.[validationConstants.noWhiteSpace];
    const charCode = (event.which) ? event.which : event.keyCode;
    if (whiteSpaceValidation && charCode == 32)
      return event.preventDefault();
  }
}