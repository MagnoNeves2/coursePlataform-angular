import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../model/Genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  getAllGeneros() {
    return this.http.get('http://localhost:8080/categorias')
  }

  getByIdGenero(id: number) {
    return this.http.get(`http://localhost:8080/categorias/${id}`)
  }

  getByNome(nome: string) {
    return this.http.get(`http://localhost:8080/nome/${nome}`)
  }

  postGenero(genero: Genero) {
    return this.http.post(`http://localhost:8080/categorias`, genero, this.token)
  }

  putGenero(genero: Genero) {
    return this.http.put(`http://localhost:8080/categorias`, genero, this.token)
  }

  deleteGenero(id: number) {
    return this.http.delete(`http://localhost:8080/categorias/${id}`, this.token)
  }

}
