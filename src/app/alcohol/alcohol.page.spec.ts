import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholPage } from './alcohol.page';

describe('AlcoholPage', () => {
  let component: AlcoholPage;
  let fixture: ComponentFixture<AlcoholPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
