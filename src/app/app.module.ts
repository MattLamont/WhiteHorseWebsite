import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindoApiService } from './bindo-api.service';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { routing } from './app.routes';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { FooterComponent } from './footer/footer.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageViewComponent,
    ProductViewComponent,
    DepartmentViewComponent,
    FooterComponent,
    AboutViewComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAygK8MzLci1lhhWGjNaIk64xBYZD6mZdI'
    })
  ],
  providers: [BindoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
