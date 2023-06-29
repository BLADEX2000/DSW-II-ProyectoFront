import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Seccion } from '../models/Seccion';
import { Carrera } from '../models/Carrera';
import { Grado } from '../models/Grado';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/alumnos';
  urls = 'http://localhost:8080/secciones';
  urlg = 'http://localhost:8080/grados';
  urlc = 'http://localhost:8080/carreras'

  getAlumnos(){
    return this.http.get<Alumno[]>(this.url);
  }

  getSecciones(){
    return this.http.get<Seccion[]>(this.urls);
  }
  createAlumno(alumno: Alumno){
    return this.http.post<Alumno>(this.url,alumno);
  }

  getAlumnosId(id:number){
    return this.http.get<Alumno>(this.url+"/"+id);
  }

  updateAlumno(alumno:Alumno){
    return this.http.put<Alumno>(this.url,alumno);
  }

  deleteAlumno(alumno:Alumno){
    return this.http.delete<Alumno>(this.url+"/"+alumno.idalumno);
  }

  getCarreras(){
    return this.http.get<Carrera[]>(this.urlc);
  }

  getGrados(){
    return this.http.get<Grado[]>(this.urlg);
  }


}
