import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursoComponent } from './adm/curso/curso.component';
import { ListausuariosComponent } from './adm/listausuarios/listausuarios.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    EditarComponent,
    DeletarComponent,
    PerfilComponent,
    CursosComponent,
    LoginComponent,
    CadastrarComponent,
    CursoComponent,
    ListausuariosComponent,
    EditarCursoComponent,
    DeletarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
