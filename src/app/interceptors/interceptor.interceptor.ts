import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /* const headers: HttpHeaders = */
    console.log("INTERCEPTOR", request);
    return next.handle( this.setXToken(request));
  }

  setXToken(request: HttpRequest<any> ) {
    const token = localStorage.getItem('token');
    return request.clone({
      setHeaders: {'x-token': token || ''}
    })
  }
}
