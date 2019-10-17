import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeveragesMenuPage } from './beverages-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BeveragesMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeveragesMenuPage]
})
export class BeveragesMenuPageModule {}
