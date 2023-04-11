export class GetProductsList {
  static readonly type = '[Products Api] Get Products List';

  constructor(public search: string) {
  }
}
