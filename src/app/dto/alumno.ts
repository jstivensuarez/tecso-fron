import { Curso } from "./curso";

export class Alumno {

    alumnoId: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    legajo: string;
    fechaNacimiento: Date;
    cursos: Curso[];
    nombreCompleto: string;
    constructor() { }
}
  