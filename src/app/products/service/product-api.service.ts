import {Injectable} from "@angular/core";
import {RequestBuilder} from "../../modules/data-access/services/request-builder";
import {Observable} from "rxjs";
import {ProductsResponseModel} from "../models/product.model";

@Injectable()
export class ProductApiService {

  constructor(private request: RequestBuilder) {
  }

  public getList(limit: number, search?: string): Observable<ProductsResponseModel> {
    return this.fetch(`products/search`)
      .withParams({limit, q: search})
      .get<ProductsResponseModel>()
  }

  private fetch(url: string) {
    return this.request.to(`auth/${url}`)
  }
}
