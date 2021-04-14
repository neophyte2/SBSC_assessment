import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthcrudInterceptorService implements HttpInterceptor, OnInit {

  ngOnInit() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("tourism") || req.url.includes("localhost")) {
      req = req.clone({
        setHeaders: {
          // orgId: `orgId ${this.orgId}`,
          // authorization: `Bearer ${this.token}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return next.handle(req);
  }
}
