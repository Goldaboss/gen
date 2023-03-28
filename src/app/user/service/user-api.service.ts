import {Injectable} from "@angular/core";
import {RequestBuilder} from "../../modules/data-access/services/request-builder";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable()
export class UserApiService {
  constructor(private request: RequestBuilder) {
  }

  public getUser(id: number): Observable<UserModel>{
    return this.fetch(`users/${id}`)
      .get<UserModel>()
  }

  private fetch(url: string) {
    return this.request.to(`auth/${url}`)
  }
}
