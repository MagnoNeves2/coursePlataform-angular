import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})


export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(){
    return this.http.get('http://localhost:3001/Postagem');
  }

  postpostagem(postagem: Postagem) {
    return this.http.post('http://localhost:3001/Postagem', postagem);
  }
}
