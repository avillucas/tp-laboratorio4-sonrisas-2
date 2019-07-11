import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosAccionComponent } from './turnos-accion.component';

describe('TurnosAccionComponent', () => {
  let component: TurnosAccionComponent;
  let fixture: ComponentFixture<TurnosAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
