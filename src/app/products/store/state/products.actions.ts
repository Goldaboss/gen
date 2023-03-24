export class GetProductsList {
  static readonly type = '[Products Api] Get Products List';
}

export class GetProductItem {
  static readonly type = '[Products Api] Get Product Item';

  constructor(public id: number) {
  }
}
