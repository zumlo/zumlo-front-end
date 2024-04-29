import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ZLoginComponent } from './components/z-login/z-login.component';
import { ZForgetComponent } from './components/z-forget/z-forget.component';
import { ZOtpComponent } from './components/z-otp/z-otp.component';
import { ZResetComponent } from './components/z-reset/z-reset.component';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';
import { DynamicComponentDirective, DynamicFieldDirective, ZSimpleButtonComponent } from '@zumlo/ui';
import { AuthenticationComponent } from './authentication.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ZChangedPasswordComponent } from './components/z-successfully-changed-password/z-changed-password.component';
import { ZInputNumberComponent } from 'libs/ui/src/components/z-input-number/z-input-number.component';

@NgModule({
  declarations: [
    ZLoginComponent,
    ZForgetComponent,
    ZOtpComponent,
    ZResetComponent,
    AuthenticationComponent,
    ZChangedPasswordComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
    UiModule,
    DynamicFieldDirective,
    ZSimpleButtonComponent,
    NgOtpInputModule,
    ZInputNumberComponent,
    DynamicComponentDirective
  ],
})
export class AuthenticationModule {}
