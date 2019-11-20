import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuPage } from './pizza-menu.page';

describe('PizzaMenuPage', () => {
  let component: PizzaMenuPage;
  let fixture: ComponentFixture<PizzaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
