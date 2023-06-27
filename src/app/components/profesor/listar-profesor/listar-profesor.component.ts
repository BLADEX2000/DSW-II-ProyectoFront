import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/servicio/profesor.service';


@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.css']
})
export class ListarProfesorComponent implements OnInit {


  profesores?: Profesor[];

  constructor(private profesorService: ProfesorService, private router:Router) { }

  ngOnInit(): void {

    this.profesorService.getProfesores().subscribe(
      data=>{
        this.profesores=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );

  }


  nuevo(): void{
    this.router.navigate(['nuevoProfesor'])
  }

  editar(profesor:Profesor): void{
    localStorage.setItem("id",profesor.idprofesor.toString());
    this.router.navigate(['editarProfesor']);
  }

}
