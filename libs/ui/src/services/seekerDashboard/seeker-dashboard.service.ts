import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { dashboard, seekerGrid, widgets } from '../../enums/mock_data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeekerDashboardService {
  API: any = environment.employesApi;
  constructor(private _http:HttpClient) { }
  getSeekerDashboard(): Observable<any>{
    return of(widgets)
    // return this._http.get<any>(this.API + '/widgets');
  }
  getSeekerGrid(): Observable<any>{
    return of(seekerGrid)
    // return this._http.get<any>(this.API + '/seekerGrid');
  }

  getSuperAdminDashboard(): Observable<any> {
    return of(dashboard)
    // return this._http.get<any>(this.API + '/dashboard');
  }
}
