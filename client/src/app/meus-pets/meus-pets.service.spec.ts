import { TestBed, inject } from '@angular/core/testing';

import { MeusPetsService } from './meus-pets.service';

describe('MeusPetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeusPetsService]
    });
  });

  it('should be created', inject([MeusPetsService], (service: MeusPetsService) => {
    expect(service).toBeTruthy();
  }));
});
