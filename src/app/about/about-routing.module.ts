import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutOverviewComponent } from './components/about-overview/about-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AboutOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
