import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ListarAlumnoComponent } from './components/alumno/listar-alumno/listar-alumno.component';
import { AddAlumnoComponent } from './components/alumno/add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './components/alumno/edit-alumno/edit-alumno.component';
import { ListarAsignaturaComponent } from './components/asignatura/listar-asignatura/listar-asignatura.component';
import { AddAsignaturaComponent } from './components/asignatura/add-asignatura/add-asignatura.component';
import { EditAsignaturaComponent } from './components/asignatura/edit-asignatura/edit-asignatura.component';
import { ListarProfesorComponent } from './components/profesor/listar-profesor/listar-profesor.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './components/profesor/edit-profesor/edit-profesor.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnoComponent,
    AddAlumnoComponent,
    EditAlumnoComponent,
    ListarAsignaturaComponent,
    AddAsignaturaComponent,
    EditAsignaturaComponent,
    ListarProfesorComponent,
    AddProfesorComponent,
    EditProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
