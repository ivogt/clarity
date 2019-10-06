import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

//Routes
import { DashboardComponent } from "./routes/dashboard";
import { RepoDetailsComponent } from "./routes/repo-details";
import { LoginComponent } from "./routes/login";
import { ErrorRemoteComponent } from "./routes/errorRemote";

//Gards
import { AuthGuardService } from "./services/auth/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "error-remote", component: ErrorRemoteComponent },
  { path: "", component: DashboardComponent, canActivate: [AuthGuardService] },
  {
    path: "details/:id",
    component: RepoDetailsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
