import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from 'environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindoApiService } from './bindo-api.service';
import {SharedDataService} from './shared-data.service';
import {BlogService} from './blog.service';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { routing } from './app.routes';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { FooterComponent } from './footer/footer.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

import { AgmCoreModule } from '@agm/core';

import { AlertModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { BlogListingViewComponent } from './blog-listing-view/blog-listing-view.component';
import { BlogViewComponent } from './blog-view/blog-view.component';


const GOOGLE_MAPS_API_KEY = environment.googleMapsApiKey;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageViewComponent,
    ProductViewComponent,
    DepartmentViewComponent,
    FooterComponent,
    AboutViewComponent,
    ContactViewComponent,
    NotFoundViewComponent,
    BlogListingViewComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API_KEY
    }),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
      BindoApiService,
      SharedDataService,
      BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
