import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {RequestBuilder} from "../../modules/data-access/services/request-builder";

@Injectable()
export class AuthService {

  constructor(
    private readonly request: RequestBuilder,
    private router: Router
  ) {
  }

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('token-exp')!)
    if (new Date() > expDate) {
      this.logout();
      return null
    }
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify({username: user.name, password: user.password});

    return this.request.to(`auth/login`).withBody(body).withHeaders(headers).post()
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error
    switch (message) {
      case "Invalid credentials" :
        this.router.navigate(['/auth', 'login'], {
          queryParams: {
            userError: true
          }
        })
        break
    }
    return throwError(error);
  }

  private setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 60 * 1000)
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
