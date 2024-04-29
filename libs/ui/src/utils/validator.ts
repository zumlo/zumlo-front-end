import { ValidatorFn } from '@angular/forms';
import { FormGroup } from "@angular/forms";
export function confirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
  const updateControlVal = (formgroup: FormGroup, val: boolean) => {
    let feild1 = formgroup.controls[matchingControlName]
    if(feild1.errors != null) {
      feild1.errors['matched'] = val;
    }else {
      val ? feild1.setErrors(null) : feild1.setErrors({ matched: val});
    }
    let feild2 = formgroup.controls[controlName] 
    if(feild2.errors != null) {
      feild2.errors['matched'] = val;
    }else {
      val ? feild2.setErrors(null) : feild1.setErrors({ matched: val});
    }
  };
  return (formgroup: any): { [key: string]: any } | null => {
    if (formgroup.value) {
      if (formgroup.controls[controlName].value !== formgroup.controls[matchingControlName].value) {
        updateControlVal(formgroup, false);
        return { matched: false }
      } else {
        updateControlVal(formgroup, true);
        return null
      }
    }
    return null;
  };


}
