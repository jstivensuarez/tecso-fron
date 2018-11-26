import { Component, OnInit } from '@angular/core';
import {Alumno} from './../../dto/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {
  
  students: Alumno[]= [];
  displayedColumns: string[] = ['nombre', 'primerApe', 'segundoApe', 'legajo','fecha', 'acciones'];
  constructor(private serviceAlumno: AlumnoService) { 
    serviceAlumno.getAlumnos().subscribe(
      data =>{
        debugger;
        this.students = data;
      }
    );
  }

  ngOnInit() {
  }

  
}
