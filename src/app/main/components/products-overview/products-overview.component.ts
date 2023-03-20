import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "./models/product.model";
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "./lib/state/products.state";
import {GetProductsList} from "./lib/state/products.actions";


@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnInit {

  constructor(private readonly store: Store) {}

  @Select(ProductsState.products) productsData$: Observable<ProductModel[]>
  @Select(ProductsState.loading) loading$: Observable<boolean>

  ngOnInit(): void {
    this.store.dispatch(new GetProductsList())
  };
}
