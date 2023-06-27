import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/servicio/profesor.service';

@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.css']
})
export class ListarProfesorComponent implements OnInit {

  profesores?: Profesor[];

  constructor(private profesorService: ProfesorService) { }

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

}
