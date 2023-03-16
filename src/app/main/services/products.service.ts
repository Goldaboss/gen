import {Injectable} from "@angular/core";
import {BehaviorSubject, finalize} from "rxjs";
import {ProductModel, ProductsResponseModel} from "../models/product.model";
import {RequestBuilder} from "../../data-access/services/request-builder";

@Injectable()
export class ProductsService {

  public productData$: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([])
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private request: RequestBuilder) {
  }

  public getList(): void {
    this.loading$.next(true)
    this.request.to(`auth/products`).get<ProductsResponseModel>()
      .pipe(
        finalize(()=> this.loading$.next(false))
      )
      .subscribe((response) => {
        this.productData$.next(response.products)
      })
  }
}
