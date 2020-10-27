import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil-info',
  templateUrl: './perfil-info.component.html',
  styleUrls: ['./perfil-info.component.css']
})
export class PerfilInfoComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  sair() {
    sessionStorage.clear();
    this.router.navigate(['/entrar'])
  }

}
