import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HttpClientModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
