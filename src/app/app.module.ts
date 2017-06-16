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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageViewComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BindoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
