import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key = 'id';
  reverse = true;
  listaCursos: Curso[];
  curso: Curso = new Curso();

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getAllCursos();
  }

  getAllCursos() {
    this.cursoService.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp;
    })
  }

}
