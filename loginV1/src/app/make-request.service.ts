import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { config } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {

  constructor(private http: HttpClient) { }
  //POST
  post(url: string, data: any): Observable<any> {
    return this.http.post(`${config['BASE_URL']}${url}`, {}, data).pipe(map((response: any) => this.handleResponse(response)),
      // if error occure try 2 time
      catchError(() => of(retry(2)))
    )
  }
  //GET
  get(url: string, dataParams: any): Observable<any> {
    return this.http.get(`${config['BASE_URL']}${url}`, {}).pipe(map((response: any) => this.handleResponse(response)))
  }
  //PUT
  put(url: string, data: any): Observable<any> {
    return this.http.put(`${config['BASE_URL']}${url}`, {}, data).pipe(map((response: any) => this.handleResponse(response)),
      // if error occure try 2 time
      catchError(() => of(retry(2)))
    )
  }
  //DELETE
  delete(url: string, data: any): Observable<any> {
    return this.http.delete(`${config['BASE_URL']}${url}`, {}).pipe(map((response: any) => this.handleResponse(response)),
      // if error occure try 2 time
      catchError(() => of(retry(2)))
    )
  }
  handleResponse(response) {
    if (response.status === 403) {
      return 'unauthorized';
    } else {
      return response;
    }
  }
}
