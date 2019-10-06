import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "gd-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  msgs: string[] = [];
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.msgs = [this.activatedRoute.snapshot.params.msg];
  }

  submit = f => {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("LoginForm is invalid!");
      this.errors = ["Please fill username and password!"];
      return;
    }
    const { username, password } = f;
    this.authService
      .authenticate({ username, password })
      .subscribe(isAuthenticated => (isAuthenticated ?  this.router.navigate([""]) : ""));
  };
}
