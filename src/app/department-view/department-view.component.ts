import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';
import { PaginationModule } from 'ngx-bootstrap';
import {SharedDataService} from '../shared-data.service';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
  providers: [BindoApiService]
})
export class DepartmentViewComponent implements OnInit, OnDestroy {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

  private sub: any;
  public department: string;
  private department_id: string;

  public listings = [];

  public totalItems: number;
  public currentPage: number;
  public itemsPerPage: number;
  public currentNumItems: number;

  public displayError = false;

  public loading = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService,
    private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.department = params['name'];

      //set HTML title tag for SEO
      this.titleService.setTitle(this.department + ' | White Horse Vapor Denver' );
      //this.metaService.addTag({ name: 'description', content: this.metaDefinition });

      // try to find the current department in the array of departments stored in shared data service
      const department_info: any = this.sharedDataService.departments.find(this.findDepartment, this);

      // if we found the department, will will use its info
      if (department_info) {

        // if the department listings are already stored, just use them and skip api call
        if (department_info.results.length !== 0) {
          this.department_id = department_info.id;
          this.listings = department_info.results;
          this.totalItems = department_info.paging.total_entries;
          this.itemsPerPage = department_info.paging.per_page;
          this.currentPage = department_info.paging.current_page;
          this.currentNumItems = this.listings.length;
          return;
        } else {
          // else we did not find listings already stored, so go call the api
          this.department_id = department_info.id;
          this.getListings(1);
        }
      } else {
        // we did not find the department, so it does not exist. 404 page
        const newLink = ['404'];
        this.router.navigate(newLink);
      }
    });

  }

  findDepartment(element) {
    return element.name === this.department;
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

    this.loading = true;
    const url_params = '/?department_ids[]=' + this.department_id + '&page=' + page;

    this.bindoApiService
      .getListings(url_params)
      .subscribe(
      (listings) => {
        this.loading = false;
        this.listings = listings.data.listings;
        this.totalItems = listings.paging.total_entries;
        this.itemsPerPage = listings.paging.per_page;
        this.currentPage = listings.paging.current_page;
        this.currentNumItems = listings.data.listings.length;
      },
      (error) => {
        this.loading = false;
        const newLink = ['404'];
        this.router.navigate(newLink);
      }
      );
  }

  ngOnDestroy() {

  }


}
