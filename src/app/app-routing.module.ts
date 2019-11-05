import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   //{ path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '', loadChildren: './login/login.module#LoginPageModule' },
   { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
   { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'burger-menu', loadChildren: './burger-menu/burger-menu.module#BurgerMenuPageModule' },
  { path: 'pizza-menu', loadChildren: './pizza-menu/pizza-menu.module#PizzaMenuPageModule' },
  { path: 'beverages-menu', loadChildren: './beverages-menu/beverages-menu.module#BeveragesMenuPageModule' },
  { path: 'alcohol', loadChildren: './alcohol/alcohol.module#AlcoholPageModule' },  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
