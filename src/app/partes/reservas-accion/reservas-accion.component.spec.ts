import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasAccionComponent } from './reservas-accion.component';

describe('ReservasAccionComponent', () => {
  let component: ReservasAccionComponent;
  let fixture: ComponentFixture<ReservasAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
