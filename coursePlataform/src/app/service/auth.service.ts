import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:8080/usuarios/login', usuarioLogin)
  }

  visivel() {
    let ok: boolean = false;
    let token = sessionStorage.getItem("token");

    if (token != null) {
      ok = true
    }

    return ok;
  }

  oculto() {
    let ok: boolean = false;
    let token = sessionStorage.getItem("token");

    if (token == null) {
      ok = true
    }

    return ok;
  }

}
