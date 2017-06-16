import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'home', component: HomepageViewComponent },
  { path: 'product', component: ProductViewComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
