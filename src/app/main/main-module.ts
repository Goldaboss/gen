import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MainRoutingModule} from "./main-routing.module";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";
import {ProductsOverviewComponent} from "./components/products-overview/products-overview.component";
import {AboutOverviewComponent} from "./components/about-overview/about-overview.component";
import {ProductsComponent} from "./components/products-overview/components/products/products.component";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../auth/services/auth.service";
import {ProductsStoreModule} from "./components/products-overview/lib/products-store.module";
import {ProductApiService} from "./components/products-overview/service/product-api.service";

@NgModule({
  declarations: [
    MainOverviewComponent,
    AboutOverviewComponent,
    UserOverviewComponent,
    ProductsOverviewComponent,
    ProductsComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
    ProductsStoreModule
  ],
  providers: [
    AuthService,
    ProductApiService
  ],
})
export class MainModule {}
