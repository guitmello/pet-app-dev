import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFastPetComponent } from './add-fast-pet.component';

describe('AddFastPetComponent', () => {
  let component: AddFastPetComponent;
  let fixture: ComponentFixture<AddFastPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFastPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFastPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
