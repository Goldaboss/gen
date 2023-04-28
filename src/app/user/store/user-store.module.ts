import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UserApiService } from '../service/user-api.service';
import { UserState } from './state/user.state';

@NgModule({
  imports: [NgxsModule.forFeature([UserState])],
  providers: [UserApiService],
})
export class UserStoreModule {}
