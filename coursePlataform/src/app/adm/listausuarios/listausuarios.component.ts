import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {

  listaUsuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.findAllUsuarios();
  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp;
    })
  }
}
