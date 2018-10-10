import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MakeRequestService } from '../make-request.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuild: FormBuilder, private http: MakeRequestService, private auth:AuthService, private router:Router) {
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
    if (valid) {
      //call API
      this.http.post('/login/admin', value).subscribe((data) => {
        //positive response only 
        this.auth.setLoggedIn(true, data.token);
        this.router.navigate(['dashboard']);
      }, (err) => {
          console.log(err);
          window.alert(err.message);
      })
    }
  }

}
