import { TestBed, inject } from '@angular/core/testing';

import { PesquisarService } from './pesquisar.service';

describe('PesquisarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisarService]
    });
  });

  it('should be created', inject([PesquisarService], (service: PesquisarService) => {
    expect(service).toBeTruthy();
  }));
});
