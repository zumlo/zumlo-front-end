import { Injectable } from '@angular/core';
import { API_URLS, ZAuthenticationService, environment} from '@zumlo/ui';
import { forget, login, otp, reset } from '../models/model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authenticationService: ZAuthenticationService) { }

  loginRoute(payload: login) {
    return this.authenticationService.post(`${environment.apiUrl}/${API_URLS.loginWithEmail}`, payload).pipe(
      map((response: Response) => {
        const loginResponse: any = response.body;
        return loginResponse;
      })
    );
  }

  forgotPassword(payload: forget) {
    return this.authenticationService.post(`${environment.apiUrl}/${API_URLS.forgotPassword}`, payload).pipe(
      map((response: Response) => {
        const forgetResponse: any = response.body;
        return forgetResponse;
      })
    );
  }

  otp(payload: otp) {
    return this.authenticationService.post(`${environment.apiUrl}/${API_URLS.verifyForgotPasswordOtp}`, payload).pipe(
      map((response: Response) => {
        const otpResponse: any = response.body;
        return otpResponse;
      })
    );
  }

  resetPassword(payload: reset) {
    return this.authenticationService.post(`${environment.apiUrl}/${API_URLS.resetPassword}`, payload).pipe(
      map((response: Response) => {
        const resetResponse: any = response.body;
        return resetResponse;
      })
    );
  }
}
