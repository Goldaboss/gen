import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => this.dialogRef.close(), 5000);

    if (this.data === 'Регистрация прошла успешно' ) {
      this.router.navigate(['/about'])
    } else {
      this.router.navigate(['/auth', 'login']);
    }
  }
}
