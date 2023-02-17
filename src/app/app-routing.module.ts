import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainOverviewComponent} from "./main/components/main-overview/main-overview.component";
import {AuthOverviewComponent} from "./auth/components/auth-overview/auth-overview.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainOverviewComponent},
  {path: 'auth', component: AuthOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
