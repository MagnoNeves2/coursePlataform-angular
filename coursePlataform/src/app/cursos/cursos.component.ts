import { Component, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';
import { Curso } from '../model/Curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaCursos: Curso[];
  curso: Curso = new Curso();

  constructor(private cursoservice: CursoService) { }

  ngOnInit() {
    this.findAllCursos();
  }

  findAllCursos() {
    this.cursoservice.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp;
    })
  }

}
