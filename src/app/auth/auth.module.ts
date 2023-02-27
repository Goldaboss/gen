import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthOverviewComponent} from "./components/auth-overview/auth-overview.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthOverviewComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class AuthModule {}
