import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAlumnosComponent } from './alumnos/manage-alumnos/manage-alumnos.component';
import { ListAlumnosComponent } from './alumnos/list-alumnos/list-alumnos.component';
import { AlumnoReporteComponent } from './alumnos/alumno-reporte/alumno-reporte.component';
import { CursoReporteComponent } from './alumnos/curso-reporte/curso-reporte.component';

const routes: Routes = [
  {path: '', component: ListAlumnosComponent},
  { path: 'list', component: ListAlumnosComponent },
  { path: 'manage', component: ManageAlumnosComponent },
  { path: 'manage/:id', component: ManageAlumnosComponent },
  { path: 'report/:id', component: AlumnoReporteComponent },
  { path: 'report-curso', component: CursoReporteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
