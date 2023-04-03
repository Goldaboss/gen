import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailRoutingModule} from './product-detail-routing.module';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule {
}
