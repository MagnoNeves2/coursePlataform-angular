import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();
  nome: string;
  descricao: string;
  genero: string;
  imagem: string;
  link: string;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

  nomeCurso(event: any) {
    this.nome = event.target.value;
  }

  descricaoCurso(event: any) {
    this.descricao = event.target.value;
  }

  generoCurso(event: any) {
    this.genero = event.target.value;
  }

  imagemCurso(event: any) {
    this.imagem = event.target.value;
  }

  linkCurso(event: any) {
    this.link = event.target.value;
  }

  cadastrar() {
    this.cursoService.postCurso(this.curso).subscribe((resp: Curso) => {
      this.curso = resp;
      console.log("Curso cadastrado com sucesso!");
      location.assign('/cursos');
    })
  }

}
