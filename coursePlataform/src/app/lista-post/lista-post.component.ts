import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  key = 'id';
  reverse = true;
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens();
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

}
