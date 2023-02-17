import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthOverviewComponent} from "./auth/components/auth-overview/auth-overview.component";
import {MainModule} from "./main/main-module";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => MainModule},
  {path: 'auth', component: AuthOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
