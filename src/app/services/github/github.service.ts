import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Repo } from  "../../models/repo.model";
import { Readme } from  "../../models/readme.model";
const base = "http://localhost:3000";
const Resolve = href => `${base}${href}`;

@Injectable({
  providedIn: "root"
})
export class GithubService {
  pinnedRepos: Repo[] = [];

  constructor(private http: HttpClient) {}

  loadPinnedRepos(): Observable<Repo[]> {
    return this.http.get(Resolve("/api/user/pinned-repos")).pipe(
      flatMap((data: Repo[]) => {
        console.log(data);
        this.pinnedRepos = data;
        return of(this.pinnedRepos);
      })
    );
  }

  loadPinnedReposReadme(repo): Observable<Readme> {
    return this.http.get(Resolve(`/api/user/pinned-repos/${repo}/readme`)).pipe(
      flatMap((data: Readme) => {
        console.log(data);
        return of(data);
      })
    );
  }


  loadPinnedReposCommits(repo): Observable<Readme> {
    return this.http.get(Resolve(`/api/user/pinned-repos/${repo}/commits`)).pipe(
      flatMap((data: Readme) => {
        console.log(data);
        return of(data);
      })
    );
  }
}
