import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAlumnosComponent } from './manage-alumnos/manage-alumnos.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AppMaterialModuleModule } from '../app-material-module/app-material-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ManageAlumnosComponent, ListAlumnosComponent],
  imports: [
    CommonModule,AppMaterialModuleModule, AppRoutingModule, FormsModule, HttpClientModule
  ], 
  exports: [
    ManageAlumnosComponent, ListAlumnosComponent
  ]
})
export class AlumnosModule { }
