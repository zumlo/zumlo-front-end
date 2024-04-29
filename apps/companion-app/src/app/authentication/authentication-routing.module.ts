import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZLoginComponent } from './components/z-login/z-login.component';
import { ZForgetComponent } from './components/z-forget/z-forget.component';
import { AuthenticationComponent } from './authentication.component';
import { ZOtpComponent } from './components/z-otp/z-otp.component';
import { ZResetComponent } from './components/z-reset/z-reset.component';
import { ZChangedPasswordComponent } from './components/z-successfully-changed-password/z-changed-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        component: ZLoginComponent,
      },
      {
        path: 'forgot-password',
        component: ZForgetComponent,
      },
      {
        path: 'otp-verify',
        component: ZOtpComponent,
      },
      {
        path: 'reset-password',
        component: ZResetComponent,
      },
      {
        path: 'password-set',
        component: ZChangedPasswordComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
