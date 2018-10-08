import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuild: FormBuilder) {
    this.loginForm = formBuild.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(6)
      ]]
    })
  }
  ngOnInit() {
  }
  loginUser() {
    const { value, valid } = this.loginForm;
    if(valid){
      //call API
      console.log(value);
      
    }
  }
}
