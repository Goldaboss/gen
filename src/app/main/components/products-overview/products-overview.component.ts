import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {BehaviorSubject} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnInit {

  public list$: BehaviorSubject<ProductModel[]>  = this.productsService.productData$;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getList();
  };
}
