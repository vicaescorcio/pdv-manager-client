import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPdvComponent } from './edit-pdv.component';

describe('EditPdvComponent', () => {
  let component: EditPdvComponent;
  let fixture: ComponentFixture<EditPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
