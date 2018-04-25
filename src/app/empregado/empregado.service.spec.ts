import { TestBed, inject } from '@angular/core/testing';

import { EmpregadoService } from './empregado.service';

describe('EmpregadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpregadoService]
    });
  });

  it('should be created', inject([EmpregadoService], (service: EmpregadoService) => {
    expect(service).toBeTruthy();
  }));
});
