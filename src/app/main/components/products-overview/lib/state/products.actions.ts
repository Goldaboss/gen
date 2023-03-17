import {ProductStateParamsModel} from "../../models/product.model";

export class GetProductsList {
  static readonly type = '[Products Api] Get Products List';

  constructor(public params?: Partial<ProductStateParamsModel>) {
  }
}
