import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {

  @Input() public userData: UserModel;
  @Input() public loading: boolean;
}
