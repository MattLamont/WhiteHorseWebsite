import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';
import { PaginationModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
  providers: [BindoApiService]
})
export class DepartmentViewComponent implements OnInit {

  private sub: any;
  public department: String;
  private department_id: String;

  public listings: Object = [];

  public totalItems: number;
  public currentPage: number;
  public itemsPerPage: number;
  public currentNumItems: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService) {
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
          this.listings = listings.data.listings;
          this.totalItems = listings.paging.total_entries;
          this.itemsPerPage = listings.paging.per_page;
          this.currentPage = listings.paging.current_page;
          this.currentNumItems = listings.data.listings.length;
        }
        );
    });

  }

  onProductClick(blid: String) {
    const newLink = ['/product', blid];
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


}
