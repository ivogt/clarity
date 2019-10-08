import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../services/github/github.service";
import { Repo } from  "../../models/repo.model";

@Component({
  selector: "dashboard-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit {
  pinnedRepos : Repo[] = [];
  repoName: String;
  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.loadPinnedRepos().subscribe(data => {
      console.log(data);
      this.pinnedRepos = data;
    });
  }

  selectedUser(...args): void {
    console.log("selectedUser", args);
  }
}
