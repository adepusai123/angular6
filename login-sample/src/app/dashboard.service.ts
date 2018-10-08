import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardResponse } from './utils/login.model';

const baseUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  constructor(private http:HttpClient) { }
  getUserDetails(){
    return this.http.get<DashboardResponse>(`${baseUrl}/admin`)
  }
}
