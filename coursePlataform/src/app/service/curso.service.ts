import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  getAllCursos() {
    return this.http.get('http://localhost:8080/cursos');
  }

  getByIdCurso(id: number) {
    return this.http.get(`http://localhost:8080/cursos/${id}`, this.token);
  }

  postCurso(curso: Curso) {
    return this.http.post('http://localhost:8080/cursos', curso, this.token);
  }

  putCurso(curso: Curso) {
    return this.http.put('http://localhost:8080/cursos', curso, this.token);
  }

  deleteCurso(id: number) {
    return this.http.delete(`http://localhost:8080/cursos/${id}`, this.token)
  }
}
