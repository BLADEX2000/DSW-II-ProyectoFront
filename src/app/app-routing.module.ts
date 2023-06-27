import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfesorComponent } from './components/profesor/listar-profesor/listar-profesor.component';

const routes: Routes = [
  {path: 'profesores', component:ListarProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
