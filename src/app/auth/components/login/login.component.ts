import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject,  finalize} from "rxjs";

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
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authFailed']) {
        this.dialog.open(DialogComponent, {data: 'Требуется авторизация'})
      } else if (params['loginAgain']) {
        this.dialog.open(DialogComponent, {data: 'Сессия истекла, требуется авторизация'})
      } else if (params['userError']) {
        this.dialog.open(DialogComponent, {data: 'Неправильное имя пользователя или пароль'})
      }
    })


    this.form = this.fb.group({
      name: ['kminchelle', [Validators.required]],
      password: ['0lelplR', [Validators.required]]
    });
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.loading$.next(true)
    this.form.disable();

    const user: User = {
      name: this.form.value.name,
      password: this.form.value.password
    }

    this.auth.login(user)
      .pipe(
        finalize(()=> this.loading$.next(false)))
      .subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.form.enable()
      }
    })
  }
}
