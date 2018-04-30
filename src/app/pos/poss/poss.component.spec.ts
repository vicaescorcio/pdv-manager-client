import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossComponent } from './poss.component';

describe('PossComponent', () => {
  let component: PossComponent;
  let fixture: ComponentFixture<PossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
