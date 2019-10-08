import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GithubService } from "../../services/github/github.service";
import { Readme } from "../../models/readme.model";

@Component({
  selector: "gd-repo-details",
  templateUrl: "./repo-details.component.html",
  styleUrls: ["./repo-details.component.less"]
})
export class RepoDetailsComponent implements OnInit {
  data: Readme;
  repoName: String;
  constructor(
    private github: GithubService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { snapshot } = this.activatedRoute;
    this.repoName = snapshot.params.id;
    this.github
      .loadPinnedReposReadme(this.repoName)
      .subscribe(data => {
        //console.log(data);
        this.data = data;
      });
  }
}
