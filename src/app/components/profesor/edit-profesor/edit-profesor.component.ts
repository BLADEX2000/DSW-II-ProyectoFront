import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/servicio/profesor.service';

@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styleUrls: ['./edit-profesor.component.css']
})
export class EditProfesorComponent implements OnInit {


  profesor = new Profesor();

  constructor(private router:Router, private profesorService:ProfesorService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.profesorService.getProfesorId(id).subscribe(data=>{
      this.profesor=data;
    });
  }

  actualizar(profesor: Profesor){
    this.profesorService.updateProfesor(profesor).subscribe(data=>{
      this.profesor=data;
      this.router.navigate(['profesores']);
    });
  }

  cancelar(){
    this.router.navigate(['profesores']);
  }

}
