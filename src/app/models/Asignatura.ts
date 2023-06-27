import { Carrera } from "./Carrera";
import { Grado } from "./Grado";
import { Profesor } from "./Profesor";

export class Asignatura{
    idasignatura: number;
    desasignatura: string;
    carrera!: Carrera;
    grado!: Grado;
    profesor!: Profesor;

    constructor(){
        this.idasignatura=0;
        this.desasignatura="";
    }
}