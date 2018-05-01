import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPosComponent } from './new-pos.component';

describe('NewPosComponent', () => {
  let component: NewPosComponent;
  let fixture: ComponentFixture<NewPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
