import { TestBed, inject } from '@angular/core/testing';

import { AddPjuridicaService } from './add-pjuridica.service';

describe('AddPjuridicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPjuridicaService]
    });
  });

  it('should be created', inject([AddPjuridicaService], (service: AddPjuridicaService) => {
    expect(service).toBeTruthy();
  }));
});
