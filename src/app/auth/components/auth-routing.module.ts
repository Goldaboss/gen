import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthOverviewComponent} from "./auth-overview/auth-overview.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: '', component: AuthOverviewComponent, children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full'},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
