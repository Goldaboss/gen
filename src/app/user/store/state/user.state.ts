import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GetUserData } from './user.actions';
import { UserApiService } from '../../service/user-api.service';
import { UserModel } from '../../models/user.model';
import { finalize, tap } from 'rxjs';

export interface UserStateModel {
  data: UserModel;
  loading: boolean;
}

const defaults: any = {
  data: {},
  loading: false,
};

@State<UserStateModel>({
  name: 'user',
  defaults,
})
@Injectable()
export class UserState {
  constructor(private readonly userApi: UserApiService) {}

  @Selector()
  static user({ data }: UserStateModel) {
    return data;
  }

  @Selector()
  static loading({ loading }: UserStateModel) {
    return loading;
  }

  @Action(GetUserData)
  public getUserData({ patchState }: StateContext<UserStateModel>) {
    const id = +localStorage.getItem('id');

    patchState({
      loading: true,
    });

    return this.userApi.getUser(id).pipe(
      tap((user) => {
        patchState({
          data: user,
        });
      }),
      finalize(() => patchState({ loading: false })),
    );
  }
}
