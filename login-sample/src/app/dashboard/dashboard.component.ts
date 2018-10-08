import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { LoginSericeService } from '../login-serice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user='';
  constructor(private dashAuth: DashboardService, private auth:LoginSericeService, 
    private router:Router) { }
  ngOnInit() {
    this.welcome();
  }
  welcome() {
    this.dashAuth.getUserDetails()
      .subscribe(data => {
        if(data.status === 403){
          this.logout();
          return;
        }
        if(data.status === 200){
            this.user=data.agent.email;
        } else {
          window.alert(data.message);
        }
      });
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedin');
    this.router.navigate(['login']);   
  }
}
