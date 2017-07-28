import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { BlogListingViewComponent } from './blog-listing-view/blog-listing-view.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

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
  { path: 'blog', component: BlogListingViewComponent },
  { path: 'blog/:id', component: BlogViewComponent },

  //{ path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/login', loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule' },

  { path: 'department/:name', component: DepartmentViewComponent },
  { path: 'product/:id', component: ProductViewComponent },

  { path: '404', component: NotFoundViewComponent },
  { path: '**', component: NotFoundViewComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
