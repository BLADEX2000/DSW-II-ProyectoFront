import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfesorComponent } from './components/profesor/listar-profesor/listar-profesor.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './components/profesor/edit-profesor/edit-profesor.component';
import { ListarAlumnoComponent } from './components/alumno/listar-alumno/listar-alumno.component';
import { AddAlumnoComponent } from './components/alumno/add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './components/alumno/edit-alumno/edit-alumno.component';
import { ListarAsignaturaComponent } from './components/asignatura/listar-asignatura/listar-asignatura.component';
import { AddAsignaturaComponent } from './components/asignatura/add-asignatura/add-asignatura.component';
import { EditAsignaturaComponent } from './components/asignatura/edit-asignatura/edit-asignatura.component';

const routes: Routes = [
  {path: 'profesores', component:ListarProfesorComponent},
  {path: 'nuevoProfesor', component:AddProfesorComponent},
  {path: 'editarProfesor', component:EditProfesorComponent},
  {path: 'alumnos', component:ListarAlumnoComponent},
  {path: 'nuevoAlumno', component:AddAlumnoComponent},
  {path: 'editarAlumno', component:EditAlumnoComponent},
  {path: 'asignaturas', component:ListarAsignaturaComponent},
  {path: 'nuevaAsignatura', component:AddAsignaturaComponent},
  {path: 'editarAsignatura', component:EditAsignaturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
