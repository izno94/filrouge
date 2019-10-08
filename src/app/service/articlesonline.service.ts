import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {
  //private url ="https://jsonplaceholder.typicode.com/posts";
  private url = 'https://limitless-scrubland-55498.herokuapp.com/api/article/';
  constructor( private http: HttpClient) { }
  getAll()
  {
    return this.http.get (this.url)
  }
  getOne(id)
  {
    return this.http.get (`${this.url}/${id}`)
  }
  create(ressource)
  {
    return this.http.post(this.url,ressource)
  }
  update(ressource)
  {
    return this.http.put(`${this.url}/${ressource.id}`,ressource)
  }
  delete(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

}
