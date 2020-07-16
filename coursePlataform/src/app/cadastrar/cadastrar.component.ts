import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  listaUsuarios: Usuario[]
  usuario: Usuario = new Usuario();
  confSenha: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  confirmaSenha(event: any) {
    this.confSenha = event.target.value;
  }

  cadastrar() {
    let senha = this.usuario.senha;
    if (senha === this.confSenha) {
      this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/feed'])
      })
    } else {
      console.log("Senhas não são idênticas! Corrija.")
    }
  }

}
