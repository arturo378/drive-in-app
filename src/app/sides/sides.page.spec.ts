import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesPage } from './sides.page';

describe('SidesPage', () => {
  let component: SidesPage;
  let fixture: ComponentFixture<SidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
