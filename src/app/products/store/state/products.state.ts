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
  id: number | null
}

const defaults: ProductsStateModel = {
  products: [],
  params: {
    limit: 0,
    id: null
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
  public GetProductsList(
    {patchState, getState}: StateContext<ProductsStateModel>
  ) {

    const {params} = getState();

    patchState({
      params: {...params},
      loading: true
    });

    return this.productApi.getList(params.limit).pipe(
      tap(({products}) => {
        patchState({
          products: products
        })
      }),
      finalize(() => patchState({loading: false}))
    )
  }

  // @Action(GetProductItem)
  // public getProductItem(
  //   {patchState, getState, dispatch} :StateContext<ProductsStateModel>,
  //   action: GetProductItem) {
  //   const { params } = getState();
  //
  //   patchState({
  //     params: {...params, ...action}
  //   });
  //   return dispatch(new GetProductsList())
  // }
}
