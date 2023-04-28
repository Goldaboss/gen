import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailApiService } from '../../service/product-detail-api.service';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOverviewComponent implements OnInit {
  public product$ = new BehaviorSubject<ProductModel>(null);

  constructor(
    private route: ActivatedRoute,
    private prod: ProductDetailApiService,
  ) {}

  ngOnInit(): void {
    this.prod
      .getProductDetail(this.route.snapshot.params['id'])
      .subscribe((prod) => {
        this.product$.next(prod);
      });
  }
}
