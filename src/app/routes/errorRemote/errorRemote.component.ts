import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "gd-errorRemote",
  templateUrl: "./errorRemote.component.html",
  styleUrls: ["./errorRemote.component.less"]
})
export class ErrorRemoteComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  params;
  ngOnInit() {
    //console.log(this.route.snapshot);
    this.params = this.route.snapshot.params;
  }
}
