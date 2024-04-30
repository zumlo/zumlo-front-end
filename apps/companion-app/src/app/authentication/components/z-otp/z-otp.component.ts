import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { forget, otp } from '../../models/model';
import { Observable, map, takeWhile, timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { ZStorageService } from '@zumlo/ui';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'z-otp',
  templateUrl: './z-otp.component.html',
  styleUrl: './z-otp.component.scss',
})
export class ZOtpComponent implements OnDestroy {
  @ViewChild('ngOtpInput') ngOtpInput!: any;
  subscription = new Subscription();
  seconds: number = 30;
  timeRemaining$: Observable<number> | undefined;
  displayTime: string | undefined;
  configBtn: any
  configs: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    disableAutoFocus: false,
  }
  otpRequired: boolean = false;
  constructor(private _router: Router, private authentication: AuthenticationService, private storage: ZStorageService) {
    this.startTimer();
    this.configBtn = {
      disabled: true,
      timeRemaining$: this.timeRemaining$,
    };
  }

  verifyOtp(){
    if(this.ngOtpInput.currentVal?.length == this.configs.length) {
      const forgotUser = JSON.parse(this.storage.getSessionStorage('forgotUser')!)
      let requiredData: otp = {
        otp: this.ngOtpInput.currentVal,
        email: forgotUser.email
      }
      this.subscription.add(this.authentication.otp(requiredData).subscribe({
        next: (res: any) => {
          if (res.success) {
            this._router.navigateByUrl('/auth/reset-password');
          }
        },
        error: (error: any) => {
        }
      }))
    } else {
      this.otpRequired = true
    }
  }

  onOtpChange(event: any) {
    if (event.length == this.configs.length) {
      this.otpRequired = false
    }
  }

  resendOtp(){
    this.startTimer();
    const email = JSON.parse(this.storage.getSessionStorage('forgotUser')!).email
    let requiredData: forget = {
      email: email,
    }
    this.subscription.add(this.authentication.forgotPassword(requiredData).subscribe({
      next: (res: any) => {
        if(res.success) {
          this.storage.setSessionStorage('email', requiredData.email)
          this._router.navigateByUrl('/auth/otp-verify');
        }
      },
      error: (error: any) => { }
    }))
  }

  startTimer() {
    this.timeRemaining$ = timer(0, 1000).pipe(
      map((n) => (this.seconds - n) * 1000),
      takeWhile((n) => n >= 0)
    );
    this.subscription.add(this.timeRemaining$.subscribe((timeInMillis) => {
      const minutes = Math.floor(timeInMillis / 60000);
      const seconds = ((timeInMillis % 60000) / 1000).toFixed(0);
      this.displayTime = `${minutes}:${(+seconds < 10 ? '0' : '') + seconds}`;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
