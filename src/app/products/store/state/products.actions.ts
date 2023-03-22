import {ProductStateParamsModel} from "./products.state";

export class GetProductsList {
  static readonly type = '[Products Api] Get Products List';

  constructor(public params?: Partial<ProductStateParamsModel>) {
  }
}

export class GetProductItem {
  static readonly type = '[Products Api] Get Product Item';

  constructor(public id:number) {
  }
}
