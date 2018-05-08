import { TestBed, inject } from '@angular/core/testing';

import { EditPetService } from './edit-pet.service';

describe('EditPetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPetService]
    });
  });

  it('should be created', inject([EditPetService], (service: EditPetService) => {
    expect(service).toBeTruthy();
  }));
});
