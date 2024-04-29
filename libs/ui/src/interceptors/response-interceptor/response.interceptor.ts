import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { ZToastrService } from '../../services/z-toastr/z-toastr.service';
import { Injectable } from '@angular/core';

@Injectable()

export class ZResponseInterceptor implements HttpInterceptor {
  errorCodes: any[] = [400, 404, 408, 409, 413, 422, 500, 503, 0];

  constructor(private toaster: ZToastrService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (res) => {
          if (res instanceof HttpResponse) { 
            let response = res.body;
           if(response.success){
            this.toaster.showSuccess(response.message, 'Success')
          }else {
             this.toaster.showError(response.message, 'Error')
           }
          }
          return res;
        },
        error: (error) => {
          this.toaster.showInfo(error.error.message, 'Error');
        },
      })
    );
  }
}

