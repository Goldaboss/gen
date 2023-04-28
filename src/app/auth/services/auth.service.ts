import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { RequestBuilder } from '../../modules/data-access/services/request-builder';

@Injectable()
export class AuthService {
  constructor(private readonly request: RequestBuilder) {}

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('token-exp')!);
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      username: user.name,
      password: user.password,
    });

    return this.request
      .to(`auth/login`)
      .withBody(body)
      .withHeaders(headers)
      .post()
      .pipe(tap(this.setToken));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 5 * 60 * 1000);
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expDate.toString());
      localStorage.setItem('id', response.id);
    } else {
      localStorage.clear();
    }
  }
}
