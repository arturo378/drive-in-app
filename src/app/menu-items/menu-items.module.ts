import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFoodPage } from './select-food/select-food.page';
import { BeveragesMenuPage } from './beverages-menu/beverages-menu.page';
import { BurgerMenuPage } from './burger-menu/burger-menu.page';
import { PizzaMenuPage } from './pizza-menu/pizza-menu.page';

import { MenuItemsRoutingModule } from './menu-items.routing';

import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [BeveragesMenuPage, BurgerMenuPage, PizzaMenuPage, SelectFoodPage ],
  imports: [
    IonicModule,
    CommonModule,
    MenuItemsRoutingModule
  ],
  exports: [
    SelectFoodPage,
    BeveragesMenuPage,
    BurgerMenuPage,
    PizzaMenuPage
  ]
})
export class MenuItemsModule { }
