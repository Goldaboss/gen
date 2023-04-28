import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsOverviewComponent } from './components/products-overview/products-overview.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { SharedModule } from '../modules/shared/shared.module';
import { ProductsStoreModule } from './store/products-store.module';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    ProductsOverviewComponent,
    ListProductsComponent,
    ItemProductComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ProductsStoreModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
