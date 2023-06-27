import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnoService } from 'src/app/servicio/alumno.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos?:Alumno[];
  
  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {

    this.alumnoService.getAlumnos().subscribe(
      data=>{
        this.alumnos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );

  }

}
