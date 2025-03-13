import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/Forms';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ FormBuilder ]
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
