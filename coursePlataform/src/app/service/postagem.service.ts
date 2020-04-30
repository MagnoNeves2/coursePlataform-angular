import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(){
    return this.http.get('http://localhost:3000/postagens')
  }


}
