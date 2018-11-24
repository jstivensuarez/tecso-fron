import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMesaggesComponent } from './generic-mesagges.component';

describe('GenericMesaggesComponent', () => {
  let component: GenericMesaggesComponent;
  let fixture: ComponentFixture<GenericMesaggesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericMesaggesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericMesaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
