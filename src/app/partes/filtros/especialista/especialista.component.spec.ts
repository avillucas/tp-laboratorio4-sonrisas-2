import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEspecialistaComponent } from './especialista.component';

describe('EspecialistaComponent', () => {
  let component: SelectorEspecialistaComponent;
  let fixture: ComponentFixture<SelectorEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
