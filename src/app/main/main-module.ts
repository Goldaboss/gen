import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";
import {CommonModule} from "@angular/common";
import {ProductsOverviewComponent} from "./components/products-overview/products-overview.component";
import {AboutOverviewComponent} from "./components/about-overview/about-overview.component";

@NgModule({
  declarations: [
    MainOverviewComponent,
    AboutOverviewComponent,
    UserOverviewComponent,
    ProductsOverviewComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ],
  providers: [],
  exports: []
})
export class MainModule {}
