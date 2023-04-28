import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthOverviewComponent } from './components/auth-overview/auth-overview.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../modules/shared/shared.module';
import { AuthService } from './services/auth.service';
import { MatRadioModule } from '@angular/material/radio';
import { RegService } from './services/reg.service';

@NgModule({
  declarations: [AuthOverviewComponent, SignupComponent, LoginComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [AuthService, RegService],
})
export class AuthModule {}
