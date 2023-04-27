import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ProductModel} from "../../models/product.model";
import {GetProductsList} from "./products.actions";
import {ProductApiService} from "../../service/product-api.service";
import {finalize, tap} from "rxjs";

export interface ProductsStateModel {
  products: ProductModel[],
  params: ProductStateParamsModel,
  loading: boolean
}

export interface ProductStateParamsModel {
  limit: number,
  search: string,
}

const defaults: ProductsStateModel = {
  products: [],
  params: {
    limit: 0,
    search: ''
  },
  loading: false
}

@State<ProductsStateModel>({
  name: 'products',
  defaults
})
@Injectable()
export class ProductsState {

  constructor(private readonly productApi: ProductApiService) {
  }

  @Selector()
  static products({products}: ProductsStateModel) {
    return products
  }

  @Selector()
  static loading({loading}: ProductsStateModel) {
    return loading
  }

  @Action(GetProductsList)
  public getProductsList(
    {patchState, getState}: StateContext<ProductsStateModel>,
    action: GetProductsList
  ) {

    const {params} = getState();

    patchState({
      params: {...params, search: action.search},
      loading: true
    });

    return this.productApi.getList(params.limit, action.search).pipe(
      tap(({products}) => {
        patchState({
          products
        })
      }),
      finalize(() => patchState({loading: false}))
    )
  }
}
