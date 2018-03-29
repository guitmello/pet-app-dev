import { TestBed, inject } from '@angular/core/testing';

import { AddPfisicaService } from './add-pfisica.service';

describe('AddPfisicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPfisicaService]
    });
  });

  it('should be created', inject([AddPfisicaService], (service: AddPfisicaService) => {
    expect(service).toBeTruthy();
  }));
});
