import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('kminchelle', [Validators.required]),
      userPassword: new FormControl('0lelplR', [Validators.required])
    })
  }

  submit() {
    console.log('request sent')
    this.form.disable()
  }
}
