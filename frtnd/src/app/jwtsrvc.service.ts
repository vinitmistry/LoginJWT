import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtsrvcService {
  private baseurl = 'http://localhost:3030';
  constructor(private http:HttpClient) { }

  sendData(data:any): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      contentType : 'application/json'
    })
    return this.http.post(`${this.baseurl}/main`,data,{headers});
  }
}
