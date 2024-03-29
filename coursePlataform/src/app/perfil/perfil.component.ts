import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  listaPostagens: Postagem[];
  postagem: Postagem = new Postagem();
  texto: string;
  key = 'id';
  reverse = true;

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findAllPostagens();

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id);

    window.scroll(0, 0)
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    })
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }

  pesquisar() {
    if (this.texto === "") {
      this.findAllPostagens()
    } else {
      this.postagemService.getByTexto(this.texto).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp;
      })
    }
  }

}
