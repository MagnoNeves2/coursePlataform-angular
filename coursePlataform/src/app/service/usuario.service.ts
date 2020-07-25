import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get('http://localhost:8080/usuarios');
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`);
  }
}