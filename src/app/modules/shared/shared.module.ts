import {NgModule} from "@angular/core";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NotificationDialogComponent} from "./components/dialog/notification-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NotificationDialogComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
