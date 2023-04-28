import { Injectable } from '@angular/core';
import { UserModel } from '../../user/models/user.model';
import { RequestBuilder } from '../../modules/data-access/services/request-builder';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class RegService {
  constructor(private readonly request: RequestBuilder) {}

  singup(user: Partial<UserModel>) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({
      firstName: user.username,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      username: user.username,
      password: user.password,
      birthDate: user.birthDate,
    });

    return this.request
      .to('users/add')
      .withBody(body)
      .withHeaders(headers)
      .post()
      .pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
