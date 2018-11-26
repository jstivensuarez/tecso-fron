import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoReporteComponent } from './curso-reporte.component';

describe('CursoReporteComponent', () => {
  let component: CursoReporteComponent;
  let fixture: ComponentFixture<CursoReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
