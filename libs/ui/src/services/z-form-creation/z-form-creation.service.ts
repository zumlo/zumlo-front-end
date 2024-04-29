import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ZFormCreationService {

  constructor() { }

  // create form according to the configs length.
  private _getFormControls(configs: any, hasSections: boolean) {
    const controls: any = {};

    configs = hasSections ? this._getControls(configs) : configs;

    for (let i = 0; i < configs?.length; i++) {
      controls[configs[i].key] = new FormControl(configs?.value);
    }
    return controls;
  }

  // Adding the form group and controls.
  getFormGroup(configs: any, customValidations: any = {}, hasSections: boolean = false) {
    const controls = this._getFormControls(configs, hasSections);
    return new FormGroup(controls, customValidations);
  }

  private _getControls(sections: Array<any>) {
    let controls: Array<any> = [];
    for (let i = 0; i < sections.length; i++) {
      controls = [ ...controls, ...sections[i].configs ];
    }
    return controls;
  }
}
