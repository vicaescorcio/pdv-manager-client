import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPdvComponent } from './new-pdv.component';

describe('NewPdvComponent', () => {
  let component: NewPdvComponent;
  let fixture: ComponentFixture<NewPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
