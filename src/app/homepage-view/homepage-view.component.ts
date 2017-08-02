import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import {BindoApiService} from '../bindo-api.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

  public new_listings: Object = [];
  public featured_listings: Object = [];
  public home_page_images = [];

  public loading = false;
  public imagesLoading = true;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService,
    private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.loading = true;
    const url_params = '';

    //set HTML title tag for SEO
    this.titleService.setTitle('Home | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });

    //get the homepage images if they aren't loaded yet
    if( this.sharedDataService.home_page_images.length == 0 ){
      this.imagesLoading = true;

      this.bindoApiService
        .getHomeImages()
        .subscribe(
        (images) => {
          this.home_page_images = images;
          this.sharedDataService.home_page_images = images;
          this.imagesLoading = false;
        }
        );
    }else{
      this.imagesLoading = false;
      this.home_page_images = this.sharedDataService.home_page_images;
    }




    if( this.sharedDataService.new_listings && this.sharedDataService.featured_listings ){
        this.loading = false;
        this.new_listings = this.sharedDataService.new_listings;
        this.featured_listings = this.sharedDataService.featured_listings;
        return;
    }

    this.bindoApiService
      .getListings(url_params)
      .subscribe(
      (listings) => {
        this.loading = false;
        this.new_listings = listings.data.listings.slice(0, 4);
        this.featured_listings = listings.data.listings.slice(10, 14);
        this.sharedDataService.new_listings = this.new_listings;
        this.sharedDataService.featured_listings = this.featured_listings;
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

  onLinkClick(name) {
    const newLink = [name];
    this.router.navigate(newLink);
  }

}
