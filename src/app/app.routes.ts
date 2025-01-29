import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
