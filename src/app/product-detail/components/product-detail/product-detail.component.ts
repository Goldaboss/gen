import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  @Input() public product: ProductModel;
}
