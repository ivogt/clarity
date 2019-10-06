import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, flatMap } from "rxjs/operators";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticated: boolean;
  user: User;

  constructor(private http: HttpClient) {}

  invalidateSession() {
    this.authenticated = false;
  }
  isAuthenticated(): boolean|Observable<boolean> {
    if (this.authenticated) {
      return of(this.authenticated);
    }
    return this.http.get("/authenticated").pipe(
      flatMap((data: User) => {
        this.authenticated = data.isAuthenticated;
        return of(data);
      }),
      flatMap((data: User) => of(data.isAuthenticated))
    );
  }
  logout() {
    this.http.get("/logout").subscribe(() => console.log("User logged out!"));
    this.authenticated = false;
  }

  authenticate({ username , password }): Observable<boolean> {
    /* TODO: add encryption(sha/md5 and salt ) before sending to server */
    return this.http.get("/authenticate").pipe(
      flatMap((data: User) => {
        this.authenticated = data.isAuthenticated;
        this.user = data;
        return of(data);
      }),
      flatMap((data: User) => of(data.isAuthenticated))
    );
  }
}
