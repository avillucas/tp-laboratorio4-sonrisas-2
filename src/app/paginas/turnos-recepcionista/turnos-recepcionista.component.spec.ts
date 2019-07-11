import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosRecepcionistaComponent } from './turnos-recepcionista.component';

describe('TurnosRecepcionistaComponent', () => {
  let component: TurnosRecepcionistaComponent;
  let fixture: ComponentFixture<TurnosRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
