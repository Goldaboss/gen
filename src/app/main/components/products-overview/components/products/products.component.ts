import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ProductModel} from "../../models/product.model"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  @Input() public productsData: ProductModel[] = [];
  @Input() public loading: boolean;
}
