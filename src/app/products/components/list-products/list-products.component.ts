import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  @Input() public productData: ProductModel[];
  @Input() public loading: boolean;
}
