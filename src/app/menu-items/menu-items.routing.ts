import { NgModule } from '@angular/core';

import { BeveragesMenuPage } from './beverages-menu/beverages-menu.page';
import { BurgerMenuPage } from './burger-menu/burger-menu.page';
import { PizzaMenuPage } from './pizza-menu/pizza-menu.page';

import {  RouterModule, Routes } from '@angular/router';
import { SelectFoodPage } from './select-food/select-food.page';

const routes: Routes = [
     { path: 'burger-menu', component: BurgerMenuPage },
     { path: 'pizza-menu', component: PizzaMenuPage },
     { path: 'beverages-menu', component: BeveragesMenuPage },
     { path: 'select-food', component: SelectFoodPage }
    ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuItemsRoutingModule { }