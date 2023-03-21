import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemProductComponent {
  @Input() productItem: ProductModel
}
