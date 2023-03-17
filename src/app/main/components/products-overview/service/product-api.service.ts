import {Injectable} from "@angular/core";
import {RequestBuilder} from "../../../../data-access/services/request-builder";
import {Observable} from "rxjs";
import {ProductsResponseModel} from "../models/Product.model";

@Injectable()
export class ProductApiService {

  constructor(public request: RequestBuilder) {
  }

  public getList(limit: number): Observable<ProductsResponseModel> {
    return this.fetch('products')
      .withParams({limit})
      .get<ProductsResponseModel>()
  }

  private fetch(url: string) {
    return this.request.to(`auth/${url}`)
  }
}