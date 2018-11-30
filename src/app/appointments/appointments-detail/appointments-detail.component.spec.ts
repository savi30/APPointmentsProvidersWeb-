import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsDetailComponent } from './appointments-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppointmentsDetailComponent', () => {
  let component: AppointmentsDetailComponent;
  let fixture: ComponentFixture<AppointmentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsDetailComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
