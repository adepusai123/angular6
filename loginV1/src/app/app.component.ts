import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private auth:AuthService, private router:Router){}
  ngOnInit(){
    this.isLoggedIn = this.auth.isLoggedIn;
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.setItem('loggedIn','false');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
