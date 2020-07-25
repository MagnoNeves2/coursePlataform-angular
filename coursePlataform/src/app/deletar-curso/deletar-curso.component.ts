import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.css']
})
export class DeletarCursoComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(private cursoService: CursoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdCurso(id);
  }

  findByIdCurso(id: number) {
    this.cursoService.getByIdCurso(id).subscribe((resp: Curso) => {
      this.curso = resp;
    })
  }

  btnSim() {
    this.cursoService.deleteCurso(this.curso.id).subscribe(() => {
      this.router.navigate(['/cursos'])
    })
  }

  btnNao() {
    this.router.navigate(['/cursos'])
  }

}
