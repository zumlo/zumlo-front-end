import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { seekerData } from '../../enums/mock_data';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  API: any = environment.employesApi;
  
  constructor(private http: HttpClient) {}

  getSeekerData(param:any) {
    return of(seekerData);
    // return this.http.get(this.API + '/seeker'+ param);
  }

  getHealthConditions() {
    return this.http.get(this.API + '/seekerHealthConditions');
  }

  getSeekerColumn() {
    return this.http.get(this.API + '/cols');
  }
}
