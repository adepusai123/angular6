import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardResponse } from './utils/login.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token') 
  })
}
const baseUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  constructor(private http:HttpClient) { }
  getUserDetails(){
    return this.http.get<DashboardResponse>(`${baseUrl}/admin`,httpOptions)
  }
}
