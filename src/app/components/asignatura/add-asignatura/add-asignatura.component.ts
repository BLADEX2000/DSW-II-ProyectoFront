import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/models/Asignatura';
import { Carrera } from 'src/app/models/Carrera';
import { Grado } from 'src/app/models/Grado';
import { Profesor } from 'src/app/models/Profesor';
import { AsignaturaService } from 'src/app/servicio/asignatura.service';

@Component({
  selector: 'app-add-asignatura',
  templateUrl: './add-asignatura.component.html',
  styleUrls: ['./add-asignatura.component.css']
})
export class AddAsignaturaComponent implements OnInit {

  modelAsignatura = new Asignatura();
  carreras!: Carrera[];
  grados!: Grado[];
  profesores!: Profesor[];
  
  constructor(private router:Router, private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
    this.cargarCarrera();
    this.cargarGrado();
    this.cargarProfesor();
  }

  guardar(asignatura:Asignatura){

    this.asignaturaService.createAsignatura(asignatura).subscribe( data=>{
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
