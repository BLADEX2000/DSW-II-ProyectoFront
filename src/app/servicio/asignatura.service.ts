import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asignatura } from '../models/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/asignaturas';

  getAsignaturas(){
    return this.http.get<Asignatura[]>(this.url);
  }
}
