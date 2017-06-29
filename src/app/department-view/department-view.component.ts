import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';
import { PaginationModule } from 'ngx-bootstrap';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
  providers: [BindoApiService]
})
export class DepartmentViewComponent implements OnInit, OnDestroy {

  private sub: any;
  public department: String;
  private department_id: String;

  public listings: Object = [];

  public totalItems: number;
  public currentPage: number;
  public itemsPerPage: number;
  public currentNumItems: number;

  public displayError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService) {
  }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.department = params['name'];
      this.department_id = params['id'];

      const url_params = '/?department_ids[]=' + this.department_id;

      this.bindoApiService
        .getListings(url_params)
        .subscribe(
        (listings) => {
          if (listings.data.listings.length < 1 ) {
            this.displayError = true;
          }
          this.listings = listings.data.listings;
          this.totalItems = listings.paging.total_entries;
          this.itemsPerPage = listings.paging.per_page;
          this.currentPage = listings.paging.current_page;
          this.currentNumItems = listings.data.listings.length;
        },
        err => {
          console.log(err);
          const newLink = ['404'];
          this.router.navigate(newLink);
        }
        );
    });

  }

  onProductClick(listing: any) {
      this.sharedDataService.product = listing;
    const newLink = ['/product', listing.blid];
    this.router.navigate(newLink);
  }

  public pageChanged(event: any): void {
    this.getListings(event.page);
  }

  getListings(page: number) {

    const url_params = '/?department_ids[]=' + this.department_id + '&page=' + page;

    this.bindoApiService
      .getListings(url_params)
      .subscribe(
      (listings) => {
        this.listings = listings.data.listings;
        this.currentPage = listings.paging.current_page;
        this.currentNumItems = listings.data.listings.length;
      }
      );
  }

  ngOnDestroy(){

  }


}
