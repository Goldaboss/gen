import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsOverviewComponent } from './components/products-overview/products-overview.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import {SharedModule} from "../shared/shared.module";
import {ProductsStoreModule} from "./store/products-store.module";


@NgModule({
  declarations: [
    ProductsOverviewComponent,
    ListProductsComponent,
    ItemProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ProductsStoreModule
  ]
})
export class ProductsModule { }
