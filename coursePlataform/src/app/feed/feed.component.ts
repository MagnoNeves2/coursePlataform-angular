import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  key = 'id';
  reverse = true;

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens();
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postpostagem(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem = resp
      location.assign('/feed');
    })
  }

}