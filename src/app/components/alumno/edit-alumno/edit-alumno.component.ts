import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { Carrera } from 'src/app/models/Carrera';
import { Grado } from 'src/app/models/Grado';
import { Seccion } from 'src/app/models/Seccion';
import { AlumnoService } from 'src/app/servicio/alumno.service';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent implements OnInit {

  constructor(private router:Router, private alumnoService:AlumnoService ) { }

  alumno = new Alumno();
  carreras!: Carrera[];
  grados!: Grado[];
  secciones!: Seccion[];
  ngOnInit(): void {
    this.editar();
    this.cargarCarrera();
    this.cargarGrado();
    this.cargarSecciones();
  }

  editar(){
    let id= JSON.parse(localStorage.getItem('id') as string);
    this.alumnoService.getAlumnosId(id).subscribe(data=>{
     this.alumno=data;
  });
  }

 actualizar(alumno:Alumno){
    this.alumnoService.updateAlumno(alumno).subscribe(data=>{
        this.alumno=data; 
        this.router.navigate(['alumnos']);
    });
  } 

 cancelar(){
  this.router.navigate(['alumnos']);
  }


  cargarCarrera(){
    this.alumnoService.getCarreras().subscribe(
      data =>{
        this.carreras=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

  cargarGrado(){
    this.alumnoService.getGrados().subscribe(
      data =>{
        this.grados=data;
      },
      error=>{
          console.log(error);
      }
    );
  }

  cargarSecciones(){
    this.alumnoService.getSecciones().subscribe(
      data =>{
        this.secciones=data;
      },
      error=>{
          console.log(error);
      }
    );
  }




}
