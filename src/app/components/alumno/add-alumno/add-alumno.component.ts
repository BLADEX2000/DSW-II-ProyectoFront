import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { Carrera } from 'src/app/models/Carrera';
import { Grado } from 'src/app/models/Grado';
import { Seccion } from 'src/app/models/Seccion';
import { AlumnoService } from 'src/app/servicio/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  alumno = new Alumno();
  carreras!: Carrera[];
  grados!: Grado[];
  secciones!: Seccion[];
  constructor(private router:Router, private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.cargarCarrera();
    this.cargarGrado();
    this.cargarSecciones();
  }

  guardar(alumno: Alumno){

    this.alumnoService.createAlumno(alumno).subscribe( data=>{
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
