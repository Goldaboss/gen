import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnInit {

  // constructor(private readonly store: Store) {}
  //
  // @Select(ProductsState.products) productsData$: Observable<ProductModel[]>
  // @Select(ProductsState.loading) loading$: Observable<boolean>
  //
  ngOnInit(): void {
    // this.store.dispatch(new GetProductsList())
  };
}
