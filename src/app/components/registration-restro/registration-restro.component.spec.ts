import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRestroComponent } from './registration-restro.component';

describe('RegistrationRestroComponent', () => {
  let component: RegistrationRestroComponent;
  let fixture: ComponentFixture<RegistrationRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationRestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
