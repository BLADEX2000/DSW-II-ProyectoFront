import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/Asignatura';
import { AsignaturaService } from 'src/app/servicio/asignatura.service';

@Component({
  selector: 'app-listar-asignatura',
  templateUrl: './listar-asignatura.component.html',
  styleUrls: ['./listar-asignatura.component.css']
})
export class ListarAsignaturaComponent implements OnInit {

  asignaturas?:Asignatura[];

  constructor(private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe(
      data=>{
        this.asignaturas=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
