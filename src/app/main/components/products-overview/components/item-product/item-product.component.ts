import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemProductComponent {
  // @Input() productItem: ProductModel
}
