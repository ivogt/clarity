import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, flatMap } from "rxjs/operators";
import { User } from "../../models/user.model";
const base = "http://localhost:3000";
const Resolve = href => `${base}${href}`;
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
  isAuthenticated(): boolean | Observable<boolean> {
    if (this.authenticated) {
      return of(this.authenticated);
    }
    return this.http.get(Resolve("/api/user/authenticated")).pipe(
      flatMap((data: User) => {
        this.authenticated = data.isAuthenticated;
        this.user = data.user;
        return of(data);
      }),
      flatMap((data: User) => of(data.isAuthenticated))
    );
  }
  logout() {
    this.http.get("/logout").subscribe(() => console.log("User logged out!"));
    this.authenticated = false;
  }

  authenticate({ email, password }): Observable<boolean> {
    return this.http
      .post(Resolve("/api/user/authenticate"), { email, password })
      .pipe(
        flatMap((data: User) => {
          this.authenticated = data.isAuthenticated;
          this.user = data;
          return of(data);
        }),
        flatMap((data: User) => of(data))
      );
  }
}
