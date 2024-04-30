import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZFormCreationService, ZStorageService, forgetFields } from '@zumlo/ui';
import { forget } from '../../models/model';
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'z-forget',
  templateUrl: './z-forget.component.html',
  styleUrl: './z-forget.component.scss',
})
export class ZForgetComponent implements OnDestroy {
  form: FormGroup;
  configs: any = forgetFields;
  subscription = new Subscription();

  constructor(formCreator: ZFormCreationService, private _router: Router, private authentication: AuthenticationService, private storage: ZStorageService) {
    this.form = formCreator.getFormGroup(this.configs);
  }

  verifyEmail() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched()
    }
    let requiredData: forget = {
      email: this.form.value?.email,
    }
    this.subscription.add(this.authentication.forgotPassword(requiredData).subscribe({
      next: (res: any) => {
        if(res.success) {
          this.storage.setSessionStorage('forgotUser', JSON.stringify({email: this.form.value.email, id: res.data.userId}))
          this._router.navigateByUrl('/auth/otp-verify');
        }
      },
      error: (error: any) => { }
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
