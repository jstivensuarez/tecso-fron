import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/dto/curso';
import { CursoService } from 'src/app/services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { GenericMesaggesComponent } from 'src/app/generic-mesagges/generic-mesagges.component';
import { Alumno } from 'src/app/dto/alumno';

@Component({
  selector: 'app-alumno-reporte',
  templateUrl: './alumno-reporte.component.html',
  styleUrls: ['./alumno-reporte.component.css']
})
export class AlumnoReporteComponent implements OnInit {

  courses: Curso[] = [];
  currentId: number;
  student: Alumno;
  displayedColumns: string[] = ['asignatura', 'cupoMaximo', 'docente', 'estado'];
  fileNameDialogRef: MatDialogRef<GenericMesaggesComponent>;

  constructor(private serviceCurso: CursoService,
    private route: ActivatedRoute, 
    private serviceAlumno: AlumnoService,
    private router: Router,
    private dialog: MatDialog) {
    this.student = new Alumno();
    this.verifyId(route);
    serviceCurso.getCopletedByAlumnoId(this.currentId).subscribe(
      data => {
        this.courses = data;
      }
    );
  }

  ngOnInit() {
  }

  verifyId(route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.currentId = params['id'];
        this.findAlumno(this.currentId);
      }
    });
  }


  findAlumno(id: number) {
    this.serviceAlumno.getAlumno(id).subscribe(
      data => {
        this.student = data;
      },
      error => {
        this.showMesagge("No se pudo encontrar este estudiante");
      }
    )
  }

  showMesagge(mesagge) {
    this.fileNameDialogRef = this.dialog.open(GenericMesaggesComponent, {
      data: { mesagge: mesagge },
    });
  }

  return() {
    this.router.navigate(["/"]);
  } 
}
