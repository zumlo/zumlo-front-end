import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZStorageService } from '../../services/z-storage/storage.service';
import { Injectable } from '@angular/core';
@Injectable()

export class ZRequestInterceptor implements HttpInterceptor {
  
  constructor(private store: ZStorageService) { }

  // This interceptor will helps to add the token in the header.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.store.getSessionStorage("token");
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: 'token' + ' ' + token }
      });
    }
    return next.handle(request);
  }
}