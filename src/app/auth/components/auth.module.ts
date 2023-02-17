import {NgModule} from "@angular/core";
import {AuthOverviewComponent} from "./auth-overview/auth-overview.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AuthOverviewComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
  providers: []
})
export class AuthModule {}
