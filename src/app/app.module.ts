import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Routes
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav";
import { ContainerComponent } from "./components/container";
import { DashboardComponent } from "./routes/dashboard";
import { RepoDetailsComponent } from "./routes/repo-details";
import { LoginComponent } from "./routes/login";
import { ErrorRemoteComponent } from "./routes/errorRemote";

//Services
import { GithubService } from "./services/github";
import { AuthService } from "./services/auth";
import { HttpErrorInterceptor } from "./services/auth";
import { AuthGuardService } from "./services/auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RepoDetailsComponent,
    LoginComponent,
    NavComponent,
    ContainerComponent,
    ErrorRemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    GithubService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
