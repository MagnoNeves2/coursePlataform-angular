import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  getAllUsuarios() {
    return this.http.get('http://localhost:8080/usuarios', this.token);
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario, this.token);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario, this.token);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`, this.token);
  }
}
