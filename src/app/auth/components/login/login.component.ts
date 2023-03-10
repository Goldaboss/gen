import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {DialogComponent} from "../dialog/dialog.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public auth: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['kminchelle', [Validators.required]],
      password: ['0lelplR', [Validators.required]]
    });
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.form.disable();

    const user: User = {
      name: this.form.value.name,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.dialog.open(DialogComponent, {data: this.auth.error})
        this.form.enable()
      }
    })
  }
}
