import { TestBed, inject } from '@angular/core/testing';

import { AddPetService } from './add-pet.service';

describe('AddPetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPetService]
    });
  });

  it('should be created', inject([AddPetService], (service: AddPetService) => {
    expect(service).toBeTruthy();
  }));
});
