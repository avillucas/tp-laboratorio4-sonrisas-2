import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionesComponent } from './atenciones.component';

describe('AtencionesComponent', () => {
  let component: AtencionesComponent;
  let fixture: ComponentFixture<AtencionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
