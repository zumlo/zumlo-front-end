import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ZLoaderService } from '../../services/z-loader/z-loader.service';

@Injectable()
export class ZConfigInterceptor implements HttpInterceptor {

  constructor(private loaderService: ZLoaderService) { }

  // This interceptor will helps to manage the scroller and the toaster dynamically.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = request.headers;
    let hideSpinner: boolean = true;
    let timer: any;

    if (!headers.has('showSpinner')) {
      headers.delete('showSpinner');
      timer = setTimeout(() => this.loaderService.showSpinner(), 200);
    }

    if (headers.has('hideSpinner')) {
      hideSpinner = false;
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (hideSpinner) {
          this.loaderService.hideSpinner();
          clearTimeout(timer);
        }
      })
    );
  }
}