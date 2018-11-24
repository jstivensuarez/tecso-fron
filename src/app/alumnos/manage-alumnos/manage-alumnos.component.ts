import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/dto/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-alumnos',
  templateUrl: './manage-alumnos.component.html',
  styleUrls: ['./manage-alumnos.component.css']
})
export class ManageAlumnosComponent implements OnInit {

  title: string = "Crear alumno";
  alumno: Alumno;
  isEditing: boolean= false;
  currentId: number;
  myModel = true;

  constructor(private serviceAlumno: AlumnoService, private route: ActivatedRoute) {
    this.alumno = new Alumno();
    this.verifyId(route);
  }
  ngOnInit() {
  }

  save() {
    this.serviceAlumno.addAlumno(this.alumno).subscribe(
      data=>{
        
      },
      error=>{
        
      }
    );
  }

  edit(){
    this.serviceAlumno.updateAlumno(this.currentId,this.alumno).subscribe(
      data=>{

      },
      error=>{

      }
    );
  }

  verifyId(route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.currentId = params['id'];
        this.findAlumno(params['id']);
        this.isEditing = true;
      }
    });
  }

  findAlumno(id: number) {
    this.serviceAlumno.getAlumno(id).subscribe(
      data=>{
        this.alumno = data;
      },
      error=>{

      }
    )
  }
}
