import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "./auth/services/auth.service";
import {Router} from "@angular/router";
import {NotificationDialogComponent} from "./modules/shared/components/dialog/notification-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `${this.auth.token}`
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 403) {
            this.auth.logout();
            this.router.navigate(['/auth', 'login']);
            this.dialog.open(NotificationDialogComponent, {data: 'Session expired, authorization required'})
          }
          return throwError(error);
        })
      )
  }
}
