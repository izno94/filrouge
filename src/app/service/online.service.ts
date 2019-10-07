import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesOnlineService {
  //private url ="https://jsonplaceholder.typicode.com/posts";
  private url = 'https://damp-refuge-61211.herokuapp.com/';
  constructor( private http: HttpClient) { }

  //Read All

  getAll()
  {
    return this.http.get (this.url)
  }

  //Read One

  getOne(id)
  {
    return this.http.get (`${this.url}/${id}`)
  }


  //Create

  create(ressource)
  {
    return this.http.post(this.url,ressource)
  }



  //Update

  update(ressource)
  {
    return this.http.put(`${this.url}/${ressource.id}`,ressource)
  }



  //delete

  delete(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

}
