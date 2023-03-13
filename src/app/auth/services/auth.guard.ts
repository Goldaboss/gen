import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ) {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.auth.logout();
      return this.router.createUrlTree(['/auth', 'login'], {
        queryParams: {
          loginAgain: true,
        }
      });
    }
  }
}
