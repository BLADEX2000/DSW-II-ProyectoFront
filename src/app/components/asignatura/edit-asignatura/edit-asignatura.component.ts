import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/models/Asignatura';
import { Carrera } from 'src/app/models/Carrera';
import { Grado } from 'src/app/models/Grado';
import { Profesor } from 'src/app/models/Profesor';
import { AsignaturaService } from 'src/app/servicio/asignatura.service';

@Component({
  selector: 'app-edit-asignatura',
  templateUrl: './edit-asignatura.component.html',
  styleUrls: ['./edit-asignatura.component.css']
})
export class EditAsignaturaComponent implements OnInit {

  asignatura = new Asignatura();
  carreras!: Carrera[];
  grados!: Grado[];
  profesores!: Profesor[];

  constructor(private router:Router, private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
    this.editar();
    this.cargarCarrera();
    this.cargarGrado();
    this.cargarProfesor();
  }

  editar(){
    let id= JSON.parse(localStorage.getItem('id') as string);
    this.asignaturaService.getAsignaturaId(id).subscribe(data=>{
     this.asignatura=data;
  });
  }

 actualizar(asignatura:Asignatura){
    this.asignaturaService.updateAsignatura(asignatura).subscribe(data=>{
        this.asignatura=data; 
        this.router.navigate(['asignaturas']);
    });
  } 

 cancelar(){
  this.router.navigate(['asignaturas']);
  }


  cargarCarrera(){
    this.asignaturaService.getCarreras().subscribe(
      data =>{
        this.carreras=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

  cargarGrado(){
    this.asignaturaService.getGrados().subscribe(
      data =>{
        this.grados=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

  cargarProfesor(){
    this.asignaturaService.getProfesores().subscribe(
      data =>{
        this.profesores=data;
      },
      error=>{
          console.log(error);
      }
    );
  }
}
