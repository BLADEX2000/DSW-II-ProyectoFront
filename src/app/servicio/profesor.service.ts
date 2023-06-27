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

}
