import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ProductModel, ProductStateParamsModel} from "../../models/Product.model";
import {GetProductsList} from "./products.actions";
import {ProductApiService} from "../../service/product-api.service";
import {finalize, tap} from "rxjs";

export interface ProductsStateModel {
  products: ProductModel[],
  params: ProductStateParamsModel,
  loading: boolean
}

const defaults: ProductsStateModel = {
  products: [],
  params: {
    limit: 0
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
  public changeRequestParams(
    {getState, patchState, setState}: StateContext<ProductsStateModel>,
    action: GetProductsList,
  ) {
    const state = getState();

    patchState({
      loading: true
    });

    patchState({
      params: {...(state.params)},
    });

    return this.productApi.getList(action.params.limit).pipe(
      tap(({products}) => {
        patchState({
          products: products
        })
      }),
      finalize(() => patchState({loading: false}))
    )

  }
}