import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RepoDetailsComponent } from "./repo-details/repo-details.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "details/:id", component: RepoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
