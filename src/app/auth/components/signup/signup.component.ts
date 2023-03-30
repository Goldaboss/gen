import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {UserModel} from "../../../user/models/user.model";
import {RegService} from "../../services/reg.service";
import {BehaviorSubject, finalize} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  public color: ThemePalette = "primary";

  public form: FormGroup = new FormGroup({})
  public hidePassword = true;
  public genderType: string = 'Male';
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private fb: FormBuilder,
    private reg: RegService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: ['firstName', [Validators.required, Validators.minLength(5)]],
      lastName: ['lastName', [Validators.required, Validators.minLength(3)]],
      gender: [null, [Validators.required]],
      email: ['email@email.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      userName: ['userName', [Validators.required, Validators.minLength(6)]],
      password: ['password', [Validators.required, Validators.minLength(5)]],
      birthDate: [new Date(), [Validators.required]]
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.loading$.next(true)
    this.form.disable()

    const newUser: Partial<UserModel> = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      gender: this.form.value.gender,
      email: this.form.value.email,
      username: this.form.value.userName,
      password: this.form.value.password,
      birthDate: this.form.value.birthDate
    }

    this.reg.singup(newUser)
      .pipe(
        finalize(() => this.loading$.next(false)))
      .subscribe({
        next: () => {
          this.dialog.open(DialogComponent, {data: 'Регистрация прошла успешно'})
        },
        error: () => {
          this.form.enable()
        }
      })
  }
}
