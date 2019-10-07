import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "gd-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.less"]
})
export class ContainerComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user: User;

  ngOnInit() {
    this.user = this.authService.getUser();
    console.log(this.user);

  }

  logout(e) {
    e.preventDefault();
    this.authService.logout().subscribe(() => {
      this.router.navigate(["login", { msg: "You've signed out" }]);
    });
  }
}
