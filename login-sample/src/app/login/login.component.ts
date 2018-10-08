import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginSericeService } from '../login-serice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private Auth: LoginSericeService,
    private router: Router) { }
  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector("[name='email']").value;
    const password = target.querySelector("[name='password']").value;
    this.Auth.getUserDetails(email, password).subscribe(data => {
      if (data && data.status === 200) {
        localStorage.setItem('token', data.token);
        this.Auth.setLoggedIn(true);
        this.router.navigate(['dashboard']);
      } else {
        window.alert(data.message);
      }
    });
  }
}
