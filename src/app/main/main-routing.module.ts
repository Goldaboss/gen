import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsOverviewComponent} from "./components/products-overview/products-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {AboutOverviewComponent} from "./components/about-overview/about-overview.component";

const routes: Routes = [
  {
    path: '', component: MainOverviewComponent, children: [
      {path: '', redirectTo: 'about', pathMatch: 'full' },
      {path: 'about', component: AboutOverviewComponent},
      {path: 'products', component: ProductsOverviewComponent},
      {path: 'user', component: UserOverviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}