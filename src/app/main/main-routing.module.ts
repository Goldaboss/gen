import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {ProductsModule} from "../products/products.module";
import {UserModule} from "../user/user.module";

const routes: Routes = [
  {
    path: '', component: MainOverviewComponent, children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', loadChildren: () => ProductsModule},
      {path: 'user', loadChildren: () => UserModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
