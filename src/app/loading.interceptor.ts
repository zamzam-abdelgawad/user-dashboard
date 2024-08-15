import {HttpInterceptorFn,HttpEvent,HttpRequest, HttpHandlerFn} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const loadingService = inject(LoaderService);

  loadingService.show();

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
    }),
    finalize(() => {
      loadingService.hide();
    })
  );
};
