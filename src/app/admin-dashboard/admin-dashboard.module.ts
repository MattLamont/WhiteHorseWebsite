import { NgModule } from '@angular/core';

import { AdminDashboardComponent }   from './admin-dashboard.component';
import { routing } from './admin-dashboard.routing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from 'environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminService } from '../admin.service';

import { AgmCoreModule } from '@agm/core';

import { AlertModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    CKEditorModule
  ],
  providers: [
    AdminService
  ],
})
export class AdminDashboardModule { }
