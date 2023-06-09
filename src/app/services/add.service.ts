import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  url = 'http://localhost:3000/Articles'

  constructor(private http: HttpClient) { }

  register(userData: any){
    console.log(userData);
    return this.http.post<any>(this.url, userData);
  }
}
