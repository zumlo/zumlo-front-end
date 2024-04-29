import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZAuthenticationService {

  // In this service all the http methods declared here and call this service to use that.
  // Through this service we can also manage the default options in the REQUEST HEADER.
  constructor(private _http: HttpClient) { }

  defaultGetOptions = {
    headers: null as unknown as HttpHeaders,
    observe: 'response',
    params: null as unknown as HttpParams,
    reportProgress: false,
    responseType: 'json',
    withCredentials: false
  };

  defaultPostHeaders = {
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'access-control-allow-origin'
  };

  defaultPutHeaders = {
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'access-control-allow-origin'
  };

  defaultPostOptions = {
    headers: this.defaultPostHeaders,
    responseType: 'json',
    observe: 'response'
  };

  defaultPutOptions = {
    headers: this.defaultPutHeaders,
    responseType: 'json',
    observe: 'response'
  };

  get(url: any, params?: any, options?: any): Observable<any> {

    if (!options) {
      options = { ...this.defaultGetOptions };
    }
    if (params) {
      options.params = params;
    }
    return this._http.get(url, options)
  }

  post(url: any, data: any, params?: any, options?: any): Observable<any> {
    if (data instanceof FormData) {
    }
    else {

      if (!options) {
        options = this.defaultPostOptions;
      }
    }


    if (params) {
      options.params = params;
    }
    return this._http.post(url, data, options).pipe(take(1));
  }


  patch(url: any, data: any, options?: any): Observable<any> {
    if (!options) {
      options = this.defaultPostOptions;
    }
    return this._http.patch(url, data, options).pipe(take(1));
  }

  put(url: any, data: any, options?: any): Observable<any> {
    if (!options) {
      options = this.defaultPutOptions;
    }
    return this._http.put(url, data, options).pipe(take(1));
  }

  delete(url: any, options?: any): Observable<any> {
    if (!options) {
      options = this.defaultPutOptions;
    }
    return this._http.delete(url, options).pipe(take(1));
  }
}
