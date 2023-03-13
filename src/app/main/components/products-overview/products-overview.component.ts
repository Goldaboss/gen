import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnInit {

  public list$ = this.productsService.productData$;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getList();
  };
}
