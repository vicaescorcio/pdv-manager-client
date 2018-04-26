import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpregadoComponent } from './new-empregado.component';

describe('NewEmpregadoComponent', () => {
  let component: NewEmpregadoComponent;
  let fixture: ComponentFixture<NewEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
