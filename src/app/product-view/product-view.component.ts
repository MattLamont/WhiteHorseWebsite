import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [BindoApiService]
})
export class ProductViewComponent implements OnInit {

  private sub: any;
  private product_id: String;

  private listing = {};

  constructor(private route: ActivatedRoute, private router: Router,
              private bindoApiService: BindoApiService) {
  }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.product_id = params['id'];

      var url_params = "/" + this.product_id;

      this.bindoApiService
        .getListings( url_params )
        .subscribe(
        (listing) => {
          this.listing = listing.data.listing;
        }
        );
    });
  }


}
