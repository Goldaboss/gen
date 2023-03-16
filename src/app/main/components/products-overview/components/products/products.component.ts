import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../../models/product.model";
import {ProductsService} from "../../../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  @Input() public productsData: ProductModel[] = [];

  constructor(public productsSv: ProductsService) { }

  ngOnInit(): void {
  }
}
