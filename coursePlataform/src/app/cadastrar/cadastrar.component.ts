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

  campoNome: boolean = false
  campoEmail: boolean = false
  campoSenha: boolean = false
  campoConfSenha: boolean = false
  campo: boolean = false

  ngOnInit(): void {
  }

  confirmaSenha(event: any) {
    this.confSenha = event.target.value;
  }

  mostrarAlerta(mensagem) {
    let alerta = document.getElementById("alerta")
    alerta.innerText = mensagem
    alerta.style.visibility = "visible";
  }

  esconderAlerta() {
    document.getElementById("alerta").style.visibility = "hidden";
  }

  mostrarAlertaSucesso(mensagem) {
    let alerta = document.getElementById("alerta")
    alerta.innerText = mensagem
    alerta.className = 'alert-success text-center p-2'
    alerta.style.visibility = "visible";
  }

  cadastrar() {
    let nome = this.usuario.nome;
    let email = this.usuario.email
    let senha = this.usuario.senha;


    if (!(nome == null) && !(email == null) && !(senha == null) && !(this.confSenha == null)) {

      if (nome.length < 2) {
        this.mostrarAlerta("O número minímo de caracteres para nome é 2!")
      }
      else if (!(email.includes("@") && email.length > 5)) {
        this.mostrarAlerta("O número minímo de caracteres para email é 6! E deve conter @ e uma terminação válida como (.com), (.net), etc")
      }
      else if (senha.length < 6) {
        this.mostrarAlerta("O número minímo de caracteres para senha é 6!")
      }
      else if (!(senha === this.confSenha)) {
        this.mostrarAlerta("Divergência com a senha fornecida!")
      }
      else {
        this.esconderAlerta();
        this.mostrarAlertaSucesso("Usuário cadastrado com sucesso!")
        setTimeout(() => {
          this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
            this.usuario = resp;
            this.router.navigate(['/entrar'])
          })
        }, 2000)
      }
    }
    else {
      this.mostrarAlerta("Erro no fornecimento de dados! Por favor, preencha corretamente os campos obrigatórios *.")
      return false;
    }
  }

}
