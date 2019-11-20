import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   // { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'menu-items', loadChildren: './menu-items/menu-items.module#MenuItemsModule'},
   { path: '', loadChildren: './login/login.module#LoginPageModule' },
   { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
   { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'burger-menu', loadChildren: '.menu-items/burger-menu/burger-menu.module#BurgerMenuPageModule' },
  // { path: 'pizza-menu', loadChildren: '.menu-items/pizza-menu/pizza-menu.module#PizzaMenuPageModule' },
  // { path: 'beverages-menu', loadChildren: '.menu-items/beverages-menu/beverages-menu.module#BeveragesMenuPageModule' },
  { path: 'alcohol', loadChildren: './alcohol/alcohol.module#AlcoholPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'sides', loadChildren: './sides/sides.module#SidesPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
