import { Injectable } from '@angular/core';
import { ZAuthenticationService } from '@zumlo/ui';
import { environment } from 'apps/marketing-app/src/environments/environment';
import { map } from 'rxjs';
import { API_URLS } from '../../utils/urls';
import { contactUs } from '../../base/components/main-layout/payload';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private authenticationService: ZAuthenticationService) { }

  // API hit for the contact section.
  contactDetails(data: contactUs) {
    return this.authenticationService.post(`${environment.apiUrl}/${API_URLS.contactDetails}`, data).pipe(
      map((response: Response) => {
        const contactDetails: any = response;
        return contactDetails;
      })
    );
  }
}
