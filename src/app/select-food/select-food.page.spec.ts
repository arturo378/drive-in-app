import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodPage } from './select-food.page';

describe('SelectFoodPage', () => {
  let component: SelectFoodPage;
  let fixture: ComponentFixture<SelectFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
