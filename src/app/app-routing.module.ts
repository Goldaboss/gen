import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainModule} from "./main/main-module";
import {AuthModule} from "./auth/components/auth.module";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => MainModule},
  {path: 'auth', loadChildren: () => AuthModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
