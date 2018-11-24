import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatListModule,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, 
  MatTableModule,
  MatCheckboxModule, 
  MatDialogModule      
} from '@angular/material'; 
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,         
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule, 
    MatListModule,
    MatTableModule, 
    MatCheckboxModule, 
    MatDialogModule,
    ScrollDispatchModule
  ], 
  exports: [
    CommonModule, 
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,         
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule, 
    MatDialogModule,
    ScrollDispatchModule
  ]
})
export class AppMaterialModuleModule { }
