import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAlumnosComponent } from './manage-alumnos/manage-alumnos.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AppMaterialModuleModule } from '../app-material-module/app-material-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenericMesaggesComponent } from '../generic-mesagges/generic-mesagges.component';

@NgModule({
  declarations: [ManageAlumnosComponent, ListAlumnosComponent],
  imports: [
    CommonModule,AppMaterialModuleModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule
  ], 
  exports: [
    ManageAlumnosComponent, ListAlumnosComponent
  ],
  entryComponents: [GenericMesaggesComponent]
})
export class AlumnosModule { }
