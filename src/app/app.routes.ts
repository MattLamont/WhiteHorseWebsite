import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'home', component: HomepageViewComponent },

  { path: 'department/:name', component: DepartmentViewComponent },
  { path: 'product/:id', component: ProductViewComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
