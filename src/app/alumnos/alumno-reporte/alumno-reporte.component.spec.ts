import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoReporteComponent } from './alumno-reporte.component';

describe('AlumnoReporteComponent', () => {
  let component: AlumnoReporteComponent;
  let fixture: ComponentFixture<AlumnoReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
