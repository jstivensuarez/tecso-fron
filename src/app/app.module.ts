import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,           
    AlumnosModule, 
    AppMaterialModuleModule,
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,      
    FormsModule,           
    AppMaterialModuleModule
  ]
})
export class AppModule { }
