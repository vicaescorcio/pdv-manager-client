import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvsComponent } from './pdvs.component';

describe('PdvsComponent', () => {
  let component: PdvsComponent;
  let fixture: ComponentFixture<PdvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
