import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsOverviewComponent} from "./components/products-overview/products-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'products', component: ProductsOverviewComponent},
  {path: 'user', component: UserOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
