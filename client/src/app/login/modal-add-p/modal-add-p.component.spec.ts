import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPComponent } from './modal-add-p.component';

describe('ModalAddPComponent', () => {
  let component: ModalAddPComponent;
  let fixture: ComponentFixture<ModalAddPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
