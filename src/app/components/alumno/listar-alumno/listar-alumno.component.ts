import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { Profesor } from 'src/app/models/Profesor';
import { AlumnoService } from 'src/app/servicio/alumno.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos?:Alumno[];
  
  constructor(private alumnoService:AlumnoService, private router: Router) { }

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

  nuevo(): void{
    this.router.navigate(['nuevoAlumno'])
  }

  editar(alumno: Alumno): void{
    localStorage.setItem("id",alumno.idalumno.toString());
    this.router.navigate(['editarAlumno']);
  }

  eliminar(alumno:Alumno):void{
    this.alumnoService.deleteAlumno(alumno).subscribe(data=>{
      this.alumnos=this.alumnos!.filter(p=>p!==alumno);
    });
  }




}
