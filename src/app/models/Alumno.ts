import { Carrera } from "./Carrera";
import { Grado } from "./Grado";
import { Seccion } from "./Seccion";

export class Alumno {
    idalumno: number;
    nomalumno: string;
    apealumno: string;
    telfalumno: string;
    seccion!: Seccion;
    grado!: Grado;
    carrera!: Carrera;

    constructor(){
        this.idalumno=0;
        this.nomalumno="";
        this.apealumno="";
        this.telfalumno="";
    }
}