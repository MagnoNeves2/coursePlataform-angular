import { Component, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';
import { Curso } from '../model/Curso';
import { Genero } from '../model/Genero';
import { GeneroService } from '../service/genero.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: Curso = new Curso();
  listaCursos: Curso[];

  genero: Genero = new Genero();
  listaGeneros: Genero[];

  constructor(private cursoservice: CursoService, private generoService: GeneroService) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllCursos();
    this.findAllGeneros();
  }

  findAllCursos() {
    this.cursoservice.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp;
    })
  }

  findAllGeneros() {
    this.generoService.getAllGeneros().subscribe((resp: Genero[]) => {
      this.listaGeneros = resp;
    })
  }

}
