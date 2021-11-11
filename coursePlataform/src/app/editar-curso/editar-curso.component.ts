import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneroService } from '../service/genero.service';
import { Genero } from '../model/Genero';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  curso: Curso = new Curso();
  nome: string;
  descricao: string;
  imagem: string;
  link: string;

  genero: Genero = new Genero();
  listaGeneros: Genero[];
  idGenero: number;

  constructor(private cursoService: CursoService, private router: Router, private route: ActivatedRoute, private generoService: GeneroService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id);
    this.findAllGeneros();
  }

  nomeCurso(event: any) {
    this.nome = event.target.value;
  }

  descricaoCurso(event: any) {
    this.descricao = event.target.value;
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
    this.genero.id = this.idGenero;
    this.curso.genero = this.genero;
    this.cursoService.putCurso(this.curso).subscribe((resp: Curso) => {
      this.curso = resp;
      this.router.navigate(['/cursos'])
    })
  }

  voltar() {
    this.router.navigate(['/cursos'])
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

}
