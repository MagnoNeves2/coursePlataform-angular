import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
