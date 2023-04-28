import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
