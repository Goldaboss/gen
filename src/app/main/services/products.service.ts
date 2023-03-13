import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductsResponseModel} from "../models/product.model";

@Injectable()
export class ProductsService {

  public productData$ = new BehaviorSubject<ProductModel[]>([])

  constructor(private http: HttpClient) {
  }

  public getList(): void {
    this.http.get<ProductsResponseModel>('https://dummyjson.com/auth/products')
      .subscribe((response) => {
        this.productData$.next(response.products)
      })
  }
}
