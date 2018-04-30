import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanoComponent } from './new-plano.component';

describe('NewPlanoComponent', () => {
  let component: NewPlanoComponent;
  let fixture: ComponentFixture<NewPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
