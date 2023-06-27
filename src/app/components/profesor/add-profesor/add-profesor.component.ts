import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/Profesor';
import { ProfesorService } from 'src/app/servicio/profesor.service';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.css']
})
export class AddProfesorComponent implements OnInit {

  modelProfesor = new Profesor();

  constructor(private router:Router, private profesorService:ProfesorService) { }

  ngOnInit(): void {
  }


  guardar(profesor:Profesor){
    this.profesorService.createProfesor(profesor).subscribe(data=>{
      this.router.navigate(['profesores']);
    });
  }

  cancelar(){
    this.router.navigate(['profesores']);
  }

}
