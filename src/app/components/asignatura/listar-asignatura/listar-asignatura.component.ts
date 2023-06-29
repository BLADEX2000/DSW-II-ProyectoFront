import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/models/Asignatura';
import { AsignaturaService } from 'src/app/servicio/asignatura.service';

@Component({
  selector: 'app-listar-asignatura',
  templateUrl: './listar-asignatura.component.html',
  styleUrls: ['./listar-asignatura.component.css']
})
export class ListarAsignaturaComponent implements OnInit {

  asignaturas?:Asignatura[];

  constructor(private asignaturaService:AsignaturaService,private router: Router) { }

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


  nuevo(): void{
    this.router.navigate(['nuevaAsignatura'])
  }

  editar(asignatura: Asignatura): void{
    localStorage.setItem("id",asignatura.idasignatura.toString());
    this.router.navigate(['editarAsignatura']);
  }

  eliminar(asignatura:Asignatura):void{
    this.asignaturaService.deleteAsignatura(asignatura).subscribe(data=>{
      this.asignaturas=this.asignaturas!.filter(p=>p!==asignatura);
    });

  }

  
}
