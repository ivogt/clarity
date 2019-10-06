import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, Subscription, of } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(/* route: ActivatedRouteSnapshot, state: RouterStateSnapshot */):
    | boolean
    | Observable<boolean> {
    const auth = this.auth.isAuthenticated();
    if (!auth) return false;

    if (auth instanceof Observable) {
      auth.subscribe(isAuthenticated => {
        console.log("isAuthenticated", isAuthenticated);
        if (!isAuthenticated) {
          this.router.navigate(["login"]);
          return false;
        }
        return true;
      });
      return auth;
    }
    throw new Error("Is Authenticated but can't subscribe to it!");
  }
}
