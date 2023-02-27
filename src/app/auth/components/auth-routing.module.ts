import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthOverviewComponent} from "./auth-overview/auth-overview.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: '', component: AuthOverviewComponent, children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
