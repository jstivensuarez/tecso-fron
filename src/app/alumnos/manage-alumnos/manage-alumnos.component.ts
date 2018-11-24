import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/dto/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GenericMesaggesComponent } from 'src/app/generic-mesagges/generic-mesagges.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manage-alumnos',
  templateUrl: './manage-alumnos.component.html',
  styleUrls: ['./manage-alumnos.component.css']
})
export class ManageAlumnosComponent implements OnInit {

  title: string = "Crear alumno";
  student: Alumno;
  isEditing: boolean = false;
  currentId: number;
  form: FormGroup;
  fileNameDialogRef: MatDialogRef<GenericMesaggesComponent>;

  constructor(private serviceAlumno: AlumnoService,
    private route: ActivatedRoute, private serviceCurso: CursoService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router) {
    this.student = new Alumno();
    this.verifyId(route);
    this.form = new FormGroup({
      cursos: new FormControl(),
    });

  }
  ngOnInit() {
  }
 
  save() {
    this.serviceAlumno.addAlumno(this.student).subscribe(
      data => {
        debugger;
        this.showMesagge("El alumno se guardó con exito");
      },
      error => {
        debugger;
        this.showMesagge("No se puedo realizar la transacción con exito, por favor pruebe más tarde!");
      }
    );
  }

  edit() {
    this.serviceAlumno.updateAlumno(this.currentId, this.student).subscribe(
      data => {
        this.showMesagge("El alumno se actualizó con exito");
      },
      error => {
        this.showMesagge("No se puedo realizar la transacción con exito, por favor pruebe más tarde!");
      }
    );
  }

  verifyId(route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.currentId = params['id'];
        this.findAlumno(params['id']);
        this.isEditing = true;
        this.title = "Editar alumno";
      }
    });
  }

  findAlumno(id: number) {
    this.serviceAlumno.getAlumno(id).subscribe(
      data => {
        this.student = data;
        this.getCursos(id);
      },
      error => {
        this.showMesagge("No se pudo encontrar este estudiante");
      }
    )
  }

  getCursos(alumnoId: number) {
    this.serviceCurso.getCursosByAlumnoId(alumnoId).subscribe(
      data => {
        this.student.cursos = data;
        this.form = new FormGroup({
          cursos: this.buildCursos(),
        });
      },
      error => {
        this.showMesagge("No se pudo obtener los cursos disponibles para este estudiante");
      }
    );
  }

  buildCursos() {
    const arr = this.student.cursos.map(curso => {
      return this.fb.control(curso.estaInscrita);
    });
    return this.fb.array(arr);
  }

  get cursos() {
    return this.form.get('cursos');
  };

  getCursosSelected(form) {
    const cursosSelected = Object.assign({}, form.value, {
      cursos: form.cursos.map((selected, i) => {
        if (!selected) {
          selected = false;
        }
        this.student.cursos[i].estaInscrita = selected;
      })
    });
  }

  submit(form) {
    if (!this.currentId) {
      this.save();
    } else {
      this.getCursosSelected(form);
      this.edit();
    }
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