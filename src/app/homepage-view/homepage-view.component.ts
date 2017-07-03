import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import {BindoApiService} from '../bindo-api.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent implements OnInit {

  public new_listings: Object = [];
  public featured_listings: Object = [];

  public loading = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService,
    private titleService: Title) { }

  ngOnInit() {
    this.loading = true;
    const url_params = '';

    //set HTML title tag for SEO
    this.titleService.setTitle( 'Home' );

    this.bindoApiService
      .getListings(url_params)
      .subscribe(
      (listings) => {
        this.loading = false;
        this.new_listings = listings.data.listings.slice(0, 4);
        this.featured_listings = listings.data.listings.slice(10, 14);
      }
      );
  }

  onProductClick(listing: any) {
    this.sharedDataService.product = listing;
    const newLink = ['/product', listing.blid];
    this.router.navigate(newLink);
  }

  onDepartmentClick(name) {
    const newLink = ['/department', name];
    this.router.navigate(newLink);
  }

}
