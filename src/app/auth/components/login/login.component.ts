import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
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
      next: (user) => {
        localStorage.setItem('userId', user.id);
        this.router.navigate(['/']);
      },
      error: () => {
        this.form.enable()
      }
    })
  }
}
