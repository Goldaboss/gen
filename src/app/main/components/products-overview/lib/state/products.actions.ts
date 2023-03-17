import {ProductStateParamsModel} from "../../models/Product.model";

export class GetProductsList {
  static readonly type = '[Products Api] Get Products List';

  constructor(public params?: Partial<ProductStateParamsModel>) {
  }
}
