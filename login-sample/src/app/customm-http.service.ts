import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
// import { LoginSericeService } from './login-serice.service';
const baseUrl: string = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class CustommHttpService {
  constructor(private http: HttpClient, 
    // private auth: LoginSericeService
    ) { }
  includeHeader() {
    // if (this.auth.isLoggedIn) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      }
      return httpOptions;
    // } else {
      // return {};
    // }
  }
  //POST METHOD
  post(url: string, data: any): Observable<any> {
    const getHeaders = this.includeHeader();
    return this.http.post(`${baseUrl}${url}`, data, getHeaders).pipe(map((response: any) => {
      if (response.status === 403) {
        window.alert('Unauthorized');
        return 'Unauthorized'; // CALL logout
      } else {
        return response;
      }
    }))
  }

  //GET METHOD
  get(url: string, data: any): Observable<any> {
    const getHeaders = this.includeHeader();
      return this.http.get(`${baseUrl}${url}`, getHeaders).pipe(map((response:any)=>{
        return response;
    }))
  }
}
