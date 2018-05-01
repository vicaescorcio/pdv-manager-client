import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBandeiraComponent } from './new-bandeira.component';

describe('NewBandeiraComponent', () => {
  let component: NewBandeiraComponent;
  let fixture: ComponentFixture<NewBandeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBandeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
