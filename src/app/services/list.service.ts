import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = 'http://localhost:3000/Articles'

  constructor(private http : HttpClient) { }

  getAllArticles(){
    return this.http.get(this.url);
  }
}
