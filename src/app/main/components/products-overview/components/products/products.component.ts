import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  // @Input() public productsData: ProductModel[] = [];
  // @Input() public loading: boolean;
}
