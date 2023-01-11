import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /* const headers: HttpHeaders = */
    console.log("INTERCEPTOR", request);
    return next.handle( this.setXToken(request))
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
            Swal.fire('Opss!', errorMsg, 'error');
        } else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          Swal.fire('Opss!', errorMsg, 'error');
        }
        console.log(errorMsg);
        return throwError(errorMsg);
    })
    )
  }

  setXToken(request: HttpRequest<any> ) {
    const token = localStorage.getItem('token');
    return request.clone({
      setHeaders: {'x-token': token || ''}
    })
  }
}
