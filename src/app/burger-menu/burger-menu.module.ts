import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BurgerMenuPage } from './burger-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BurgerMenuPage]
})
export class BurgerMenuPageModule {}
