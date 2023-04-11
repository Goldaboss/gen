import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "../../store/state/products.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {GetProductsList} from "../../store/state/products.actions";

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnInit {

  @Select(ProductsState.products) productsData$: Observable<ProductModel[]>;
  @Select(ProductsState.loading) loading$: Observable<boolean>

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProductsList(''));
  }

  search(search: string) {
    this.store.dispatch(new GetProductsList(search))
  }
}
