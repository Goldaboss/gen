import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailApiService } from '../../service/product-detail-api.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ProductModel } from '../../../products/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../../../modules/shared/components/dialog/notification-dialog.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  public product$ = new BehaviorSubject<ProductModel>(null);

  constructor(
    private route: ActivatedRoute,
    private prod: ProductDetailApiService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.prod
      .getProductDetail(this.route.snapshot.params['id'])
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (prod) => {
          this.product$.next(prod);
        },
        error: (err) => {
          this.dialog.open(NotificationDialogComponent, {
            data: err.message,
          });
          this.router.navigate(['/main', 'products']);
        },
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
