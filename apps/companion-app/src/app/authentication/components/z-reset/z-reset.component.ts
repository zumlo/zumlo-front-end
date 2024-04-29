import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { confirmPasswordValidator, resetFields, ZFormCreationService, ZStorageService } from '@zumlo/ui';
import { AuthenticationService } from '../../services/authentication.service';
import { reset } from '../../models/model';
import objectHash from 'object-hash';
import { Subscription } from 'rxjs';


@Component({
  selector: 'z-reset',
  templateUrl: './z-reset.component.html',
  styleUrl: './z-reset.component.scss',
})
export class ZResetComponent {
  form: FormGroup;
  configs: any = resetFields;
  subscription = new Subscription();

  constructor(public dialog: MatDialog, formCreator: ZFormCreationService, private _router: Router, private authentication: AuthenticationService, private storage: ZStorageService) {
    this.form = formCreator.getFormGroup(this.configs, confirmPasswordValidator('oldPassword', 'newPassword'));
  }

  resetPassword() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    else {
      const forgotUser = JSON.parse(this.storage.getSessionStorage('forgotUser')!)
      let requiredData: reset = {
        id: forgotUser.id,
        password: this.form.value?.newPassword,
      }
      this.subscription.add(this.authentication.resetPassword(requiredData).subscribe({
        next: (res: any) => {
          if (res.success) {
            this._router.navigateByUrl('auth/password-set');
          }
        },
        error: (error: any) => {
        }
      }));
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
