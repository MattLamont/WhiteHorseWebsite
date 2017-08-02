import { NgModule , Component, EventEmitter, Output, Input , OnInit , OnDestroy , ViewChild , AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { BindoApiService } from './bindo-api.service';
import { SharedDataService } from './shared-data.service';
import { BlogService } from './blog.service';

import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BindoApiService,
              SharedDataService,
              BlogService]
})

export class AppComponent implements OnInit {

  @ViewChild(ModalDirective) public staticModal: ModalDirective;

public ageVerified = false;

  constructor( private route: ActivatedRoute, private router: Router,
               private bindoApiService: BindoApiService , private sharedDataService: SharedDataService ) {

  }

  ngOnInit() {

      // preload the first page of listings for each department and pass to shared data service
      this.sharedDataService.departments.forEach( (element) => {
          const url_params = '/?department_ids[]=' + element.id;

          this.bindoApiService
            .getListings(url_params)
            .subscribe(
            (listings) => {
              element.results = listings.data.listings;
              element.paging = listings.paging;
            });
      } );
  }

  ngAfterViewInit() {
    if( !this.ageVerified ){
      this.staticModal.show();
    }
  }

}
