import { NgModule } from '@angular/core';
import {AboutOverviewComponent} from "./components/about-overview/about-overview.component";
import {AboutRoutingModule} from "./about-routing.module";

@NgModule({
  declarations: [
    AboutOverviewComponent
  ],
  imports: [
    AboutRoutingModule
  ]
})
export class AboutModule { }
