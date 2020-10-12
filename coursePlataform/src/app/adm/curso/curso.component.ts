import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { Genero } from 'src/app/model/Genero';
import { CursoService } from 'src/app/service/curso.service';
import { GeneroService } from 'src/app/service/genero.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();
  nome: string;
  descricao: string;
  imagem: string;
  link: string;

  genero: Genero = new Genero();
  listaGeneros: Genero[];
  idGenero: number;

  constructor(private cursoService: CursoService, private generoService: GeneroService) { }

  ngOnInit() {
    this.findAllGeneros();
  }

  findAllGeneros() {
    this.generoService.getAllGeneros().subscribe((resp: Genero[]) => {
      this.listaGeneros = resp;
    })
  }

  findByIdGenero() {
    this.generoService.getByIdGenero(this.idGenero).subscribe((resp: Genero) => {
      this.genero = resp;
    })
  }

  cadastrar() {
    this.cursoService.postCurso(this.curso).subscribe((resp: Curso) => {
      this.curso = resp;
      location.assign('/cursos');
    })
  }

  nomeCurso(event: any) {
    this.nome = event.target.value;
  }

  descricaoCurso(event: any) {
    this.descricao = event.target.value;
  }

  // generoCurso(event: any) {
  //   this.genero = event.target.value;
  // }

  imagemCurso(event: any) {
    this.imagem = event.target.value;
  }

  linkCurso(event: any) {
    this.link = event.target.value;
  }

}
