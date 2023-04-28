import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../modules/shared/shared.module';
import { ProductDetailApiService } from './service/product-detail-api.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductOverviewComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule,
    MatCardModule,
  ],
  providers: [ProductDetailApiService],
})
export class ProductDetailModule {}
