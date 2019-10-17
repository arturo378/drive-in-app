import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuPage } from './burger-menu.page';

describe('BurgerMenuPage', () => {
  let component: BurgerMenuPage;
  let fixture: ComponentFixture<BurgerMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
