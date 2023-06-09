import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  url = 'http://localhost:3000/Articles'

  constructor(private http : HttpClient) { }

  deleteArticle( id:any ){
    return this.http.delete(`${this.url}/${id}`);
  }
}
