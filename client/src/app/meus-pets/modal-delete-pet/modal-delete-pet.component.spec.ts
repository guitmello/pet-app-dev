import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePetComponent } from './modal-delete-pet.component';

describe('ModalDeletePetComponent', () => {
  let component: ModalDeletePetComponent;
  let fixture: ComponentFixture<ModalDeletePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
