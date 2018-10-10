import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  setLoggedIn(value: boolean, token:string) {
    this.loggedInStatus = value;
    localStorage.setItem('token',token);
    localStorage.setItem('loggedIn', this.loggedInStatus);
  }
  get isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus);
  }
  constructor() { }
}
