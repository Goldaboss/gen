import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";

import {AuthOverviewComponent} from "./components/auth-overview/auth-overview.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {DialogComponent} from "./components/dialog/dialog.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthOverviewComponent,
    SignupComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ],
  providers: []
})
export class AuthModule {}
