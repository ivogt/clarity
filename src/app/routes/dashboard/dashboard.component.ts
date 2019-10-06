import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../services/github/github.service";

@Component({
  selector: "dashboard-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit {
  pinnedRepos;

  constructor(private github: GithubService) {}

  ngOnInit() {
       this.github.loadPinnedRepos().subscribe(data=>{
         console.log(data);
         this.pinnedRepos = data;
       });
  }

  selectedUser(...args): void {
    console.log("selectedUser",args)
  }

}
