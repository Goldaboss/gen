import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { NotificationDialogComponent } from '../../modules/shared/components/dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.auth.logout();
      this.dialog.open(NotificationDialogComponent, {
        data: 'Session expired, authorization required',
      });
      return this.router.createUrlTree(['/auth', 'login']);
    }
  }
}
