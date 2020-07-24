import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  curso: Curso = new Curso();
  nome: string;
  descricao: string;
  genero: string;
  imagem: string;
  link: string;

  constructor(private cursoService: CursoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id);
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

  findById(id: number) {
    this.cursoService.getByIdCurso(id).subscribe((resp: Curso) => {
      this.curso = resp;
    })
  }

  salvar() {
    this.cursoService.putCurso(this.curso).subscribe((resp: Curso) => {
      this.curso = resp;
      this.router.navigate(['/cursos'])
    })
  }

  voltar() {
    this.router.navigate(['/cursos'])
  }

}
