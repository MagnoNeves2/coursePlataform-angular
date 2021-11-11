import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  alerta: boolean = false

  constructor(private postagemService: PostagemService, private router: Router, private locationPage: Location) { }

  ngOnInit() {

    window.scroll(0, 0)

    let item: string = localStorage.getItem('delOk')
    if (item == 'true') {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        this.refresh();
      }, 3000)

    }
  }

  refresh() {
    this.router.navigateByUrl('/lista-post', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.locationPage.path()])
    })
  }

  publicar() {
    this.postagemService.postpostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.refresh();
    })
  }


}
