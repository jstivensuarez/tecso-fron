import { Docente } from "./docente";

export class Curso {

    cursoId: number;
    asignatura: string;
    cupoMaximo: number;
    docente: Docente;
    estaInscrita: boolean;
    constructor(){}
}