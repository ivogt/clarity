import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
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
  getUser(): User {
    return this.user;
  }
  isAuthenticated(): boolean | Observable<boolean> {
    if (this.authenticated) {
      return of(this.authenticated);
    }
    return this.http.get(Resolve("/api/user/authenticated")).pipe(
      flatMap((data: User) => {
        this.authenticated = true;
        this.user = data;
        console.log(data)
        return of(true);
      })
    );
  }

  authenticate({ email, password }): Observable<User> {
    return this.http
      .post(Resolve("/api/user/authenticate"), { email, password })
      .pipe(
        flatMap((data: User) => {
          this.authenticated = true;
          this.user = data;
          return of(data);
        })
      );
  }
  logout(): Observable<any> {
    return this.http.get(Resolve("/api/user/logout")).pipe(
      flatMap((res) => {
        this.authenticated = false;
        return of(res);
      })
    );
  }
}
