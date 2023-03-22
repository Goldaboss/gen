import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MainRoutingModule} from "./main-routing.module";
import {MainOverviewComponent} from "./components/main-overview/main-overview.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MainOverviewComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
  ]
})

export class MainModule {
}
