import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAlumnosComponent } from './alumnos/manage-alumnos/manage-alumnos.component';
import { ListAlumnosComponent } from './alumnos/list-alumnos/list-alumnos.component';

const routes: Routes = [
  {path: '', component: ListAlumnosComponent},
  { path: 'list', component: ListAlumnosComponent },
  { path: 'manage', component: ManageAlumnosComponent },
  { path: 'manage/:id', component: ManageAlumnosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
