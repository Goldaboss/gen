import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";

@NgModule({
  declarations: [
    MainOverviewComponent,
    UserOverviewComponent
  ],
  imports: [
    MainRoutingModule,
  ],
  providers: [],
  exports: []
})
export class MainModule {}
