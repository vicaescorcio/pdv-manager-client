import { TestBed, inject } from '@angular/core/testing';

import { BandeiraService } from './bandeira.service';

describe('BandeiraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandeiraService]
    });
  });

  it('should be created', inject([BandeiraService], (service: BandeiraService) => {
    expect(service).toBeTruthy();
  }));
});
