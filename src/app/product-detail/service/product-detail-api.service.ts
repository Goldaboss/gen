import { Injectable } from '@angular/core';
import { RequestBuilder } from '../../modules/data-access/services/request-builder';
import { Observable } from 'rxjs';
import { ProductModel } from '../../products/models/product.model';

@Injectable()
export class ProductDetailApiService {
  constructor(private request: RequestBuilder) {}

  public getProductDetail(id: number): Observable<ProductModel> {
    return this.fetch(`product/${id}`).get<ProductModel>();
  }

  private fetch(url: string) {
    return this.request.to(`auth/${url}`);
  }
}
