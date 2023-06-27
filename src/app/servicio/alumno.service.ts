import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

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


}
