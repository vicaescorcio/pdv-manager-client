import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdutoComponent } from './new-produto.component';

describe('NewProdutoComponent', () => {
  let component: NewProdutoComponent;
  let fixture: ComponentFixture<NewProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
