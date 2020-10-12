import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../model/Genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

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
    return this.http.post(`http://localhost:8080/categorias`, genero)
  }

  putGenero(genero: Genero) {
    return this.http.put(`http://localhost:8080/categorias`, genero)
  }

  deleteGenero(id: number) {
    return this.http.delete(`http://localhost:8080/categorias/${id}`)
  }

}
