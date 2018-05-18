import { TestBed, inject } from '@angular/core/testing';

import { AddFastPetService } from './add-fast-pet.service';

describe('AddFastPetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFastPetService]
    });
  });

  it('should be created', inject([AddFastPetService], (service: AddFastPetService) => {
    expect(service).toBeTruthy();
  }));
});
