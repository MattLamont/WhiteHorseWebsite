import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import {BindoApiService} from '../bindo-api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.css']
})
export class HomepageViewComponent implements OnInit {

  public new_listings: Object = [];
  public featured_listings: Object = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService) { }

  ngOnInit() {

    const url_params: string = '';

    this.bindoApiService
      .getListings(url_params)
      .subscribe(
      (listings) => {
        this.new_listings = listings.data.listings.slice(0, 4);
        this.featured_listings = listings.data.listings.slice(10, 14);
      }
      );
  }

  onProductClick( blid: string ){
      const newLink = ['/product' , blid ];
      this.router.navigate( newLink );
  }

  onDepartmentClick( name , id ) {
    const newLink = ['/department', name , id];
    this.router.navigate(newLink);
  }

}
