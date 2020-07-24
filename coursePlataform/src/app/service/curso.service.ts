import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getAllCursos() {
    return this.http.get('http://localhost:8080/cursos');
  }

  getByIdCurso(id: number) {
    return this.http.get(`http://localhost:8080/cursos/${id}`);
  }

  postCurso(curso: Curso) {
    return this.http.post('http://localhost:8080/cursos', curso);
  }

  putCurso(curso: Curso) {
    return this.http.put('http://localhost:8080/cursos', curso);
  }

  deleteCurso(id: number) {
    return this.http.delete(`http://localhost:8080/cursos/${id}`)
  }
}
