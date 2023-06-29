import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from '../models/Asignatura';
import { Carrera } from '../models/Carrera';
import { Grado } from '../models/Grado';
import { Profesor } from '../models/Profesor';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/asignaturas';
  urlc = 'http://localhost:8080/carreras';
  urlg = 'http://localhost:8080/grados';
  urlp = 'http://localhost:8080/profesores'

  getAsignaturas(){
    return this.http.get<Asignatura[]>(this.url);
  }
  createAsignatura(asignatura: Asignatura){
    return this.http.post<Asignatura>(this.url,asignatura);
  }

  getAsignaturaId(id:number){
    return this.http.get<Asignatura>(this.url+"/"+id);
  }

  updateAsignatura(asignatura:Asignatura){
    return this.http.put<Asignatura>(this.url,asignatura);
  }
  
  deleteAsignatura(asignatura:Asignatura){
    return this.http.delete<Asignatura>(this.url+"/"+asignatura.idasignatura);
  }

  getCarreras(){
    return this.http.get<Carrera[]>(this.urlc);
  }

  getGrados(){
    return this.http.get<Grado[]>(this.urlg);
  }

  getProfesores(){
    return this.http.get<Profesor[]>(this.urlp);
  }
}
