import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Curso } from 'src/app/dto/curso';
import { CursoService } from 'src/app/services/curso.service';
import { Docente } from 'src/app/dto/docente';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/dto/alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-reporte',
  templateUrl: './curso-reporte.component.html',
  styleUrls: ['./curso-reporte.component.css']
})
export class CursoReporteComponent implements OnInit {
  myControl = new FormControl();
  courses: Curso[];
  filteredcourses: Observable<Curso[]>;
  currentCouse: Curso;
  currentProfessor : Docente;
  students: Alumno[];
  displayedColumns: string[] = ['nombre', 'primerApe', 'segundoApe', 'legajo'];
  constructor(private serviceCurso: CursoService,
    private serviceAlumno: AlumnoService,
    private router: Router) {
    this.currentCouse = new Curso();  
  }

  ngOnInit() {
   this.getCourses();
  }

  filter(value: string): Curso[] {
    return this.courses.filter(option => option.asignatura.includes(value));
  }
  
  displayFn(curso?: Curso): string | undefined {
    return curso ? curso.asignatura : undefined;
  }
  
  getCourses(){
    this.serviceCurso.getAllCourses().subscribe(
      data => {
        this.courses = data;
        this.filteredcourses = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
      }
    );
  }

  getStudents(course){
    this.currentCouse = course;
    this.currentProfessor = course.docente;
    this.serviceAlumno.getAlumnoByCourseId(course.cursoId).subscribe(
      data=>{
        this.students = data;
      }
    );
  }

  return() {
    this.router.navigate(["/"]);
  } 

}
