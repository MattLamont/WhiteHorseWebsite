import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'home', component: HomepageViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'contact', component: ContactViewComponent },

  { path: 'department/:name', component: DepartmentViewComponent },
  { path: 'product/:id', component: ProductViewComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
