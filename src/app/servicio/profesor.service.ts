import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from '../models/Profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/profesores';

  getProfesores(){
    return this.http.get<Profesor[]>(this.url);
  }

  createProfesor(profesor: Profesor){
    return this.http.post<Profesor>(this.url,profesor)
  }

  getProfesorId(id:number){
    return this.http.get<Profesor>(this.url+"/"+id);
  }

  updateProfesor(profesor:Profesor){
    return this.http.put<Profesor>(this.url,profesor);
  }

}
