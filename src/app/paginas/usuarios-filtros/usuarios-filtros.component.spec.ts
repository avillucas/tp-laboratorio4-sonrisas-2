import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFiltrosComponent } from './usuarios-filtros.component';

describe('UsuariosFiltrosComponent', () => {
  let component: UsuariosFiltrosComponent;
  let fixture: ComponentFixture<UsuariosFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
