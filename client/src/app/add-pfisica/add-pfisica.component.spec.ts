import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPfisicaComponent } from './add-pfisica.component';

describe('AddPfisicaComponent', () => {
  let component: AddPfisicaComponent;
  let fixture: ComponentFixture<AddPfisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPfisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPfisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
