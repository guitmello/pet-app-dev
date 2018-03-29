import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPjuridicaComponent } from './add-pjuridica.component';

describe('AddPjuridicaComponent', () => {
  let component: AddPjuridicaComponent;
  let fixture: ComponentFixture<AddPjuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPjuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPjuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
