import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService, public router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        /* catch code 401 (Unauthenticated) and require login! */
        if(error.status==401){
          this.authService.invalidateSession();
          this.router.navigate(["login",{msg:"Login required!"}], {
            skipLocationChange: true,
          });
        }else{
          this.router.navigate(["error-remote",error], {
            skipLocationChange: true,
          });
        }
        return throwError(error.message);
      })
    );
  }
}
