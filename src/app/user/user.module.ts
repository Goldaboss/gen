import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { UserRoutingModule } from './user-routing.module';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserStoreModule } from './store/user-store.module';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [UserOverviewComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserStoreModule,
    MatCardModule,
    SharedModule,
  ],
})
export class UserModule {}
