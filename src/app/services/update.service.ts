import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  url = 'http://localhost:3000/Articles'


  constructor(private http: HttpClient) { }

  getArticle(id:any){
    return this.http.get(`${this.url}/${id}`);

  }

  updatepostData(id: any, data: any){
    return this.http.put(`${this.url}/${id}`, data);

  }
}
