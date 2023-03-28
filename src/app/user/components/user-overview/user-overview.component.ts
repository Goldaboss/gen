import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetUserData} from "../../store/state/user.actions";
import {UserState} from "../../store/state/user.state";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOverviewComponent implements OnInit {

  @Select(UserState.user) userData$: Observable<UserModel>
  @Select(UserState.loading) loading$: Observable<boolean>

  constructor(
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUserData());
  }
}
