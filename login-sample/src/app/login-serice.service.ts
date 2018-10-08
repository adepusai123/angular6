import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { LoginResponse } from './utils/login.model';
import { Observable } from 'rxjs';
import { CustommHttpService } from './customm-http.service';

//for eleminating error line for api response data.status
@Injectable({
  providedIn: 'root'
})
export class LoginSericeService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }
  get isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus);
  }
  constructor(private http: CustommHttpService) { }
  getUserDetails(email, password): Observable<any> {
    // return this.http.post<LoginResponse>(`${baseUrl}/login/admin`, { email, password }) // normal 
    return this.http.post(`/login/admin`, { email, password }) // custome
  }
}
