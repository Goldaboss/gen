import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainModule} from "./main/main-module";
import {AuthModule} from "./auth/auth.module";
import {AboutModule} from "./about/about.module";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => MainModule, canActivate: [AuthGuard]},
  {path: 'about', loadChildren: () => AboutModule},
  {path: 'auth', loadChildren: () => AuthModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
