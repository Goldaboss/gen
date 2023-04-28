import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ProductApiService } from '../service/product-api.service';
import { ProductsState } from './state/products.state';

@NgModule({
  imports: [NgxsModule.forFeature([ProductsState])],
  providers: [ProductApiService],
})
export class ProductsStoreModule {}
