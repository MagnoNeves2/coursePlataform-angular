import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  listaPostagens: Postagem[];
  postagem: Postagem = new Postagem();
  texto: string;

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens();
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }

  pesquisar() {
    this.postagemService.getByTexto(this.texto).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }

}
