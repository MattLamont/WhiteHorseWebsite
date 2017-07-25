import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';
import { AlertModule } from 'ngx-bootstrap';
import {SharedDataService} from '../shared-data.service';
import { environment } from 'environments/environment';
import { Title, Meta } from '@angular/platform-browser';

import {Listing} from '../models/listing';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [BindoApiService]
})
export class ProductViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

  private sub: any;
  private product_id: string;

  public listing: any;

  public name = '';
  public email_address = '';
  public text = '';
  private subject = '';
  private email_sent = false;
  private email: Email;

  public alert_message: string;
  public alert_type = 'danger';

  public loading = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService,
    private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {

    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });

    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.product_id = params['id'];

      if (this.sharedDataService.product) {
        this.listing = this.sharedDataService.product;
        this.titleService.setTitle(this.listing.name + ' | White Horse Vapor Denver');
      } else {
        this.loading = true;
        const url_params = '/' + this.product_id;

        this.bindoApiService
          .getListings(url_params)
          .subscribe(
          (listing) => {
            this.loading = false;
            this.listing = listing.data.listing;
            this.titleService.setTitle(this.listing.name + ' | White Horse Vapor Denver');
          },
          err => {
            console.log(err);
            const newLink = ['404'];
            this.router.navigate(newLink);
          }
          );
      }

    });
  }

  sendEmail() {

    if (this.email_sent === true) {
      this.alert_message = 'Email has already been sent';
      return;
    }

    if (this.name.length === 0) {
      this.alert_message = 'Please enter a name';
      return;
    }

    if (this.email_address.length === 0) {
      this.alert_message = 'Please enter an email address';
      return;
    }

    if (this.text.length === 0) {
      this.alert_message = 'Please enter a message';
      return;
    }

    const body =
      'Name: ' + this.name + '\n' +
      'Email: ' + this.email_address + '\n' +
      'Subject: Product Inquiry\n' +
      'Product: ' + this.listing.name + '\n' +
      'Product Number: ' + this.listing.product_id + '\n' +
      'Manufacturer: ' + this.listing.brand_name + '\n' +
      'Message:\n\n' +
      this.text;

    this.email = new Email(
      'product.inquiry@whvapor.com',
      environment.contactEmail,
      'Product Inquiry',
      body);

    this.email_sent = true;
    this.alert_type = 'success';
    this.alert_message = 'Sending message...';

    this.bindoApiService
      .postEmail(this.email)
      .subscribe(
      (res) => {
        this.alert_type = 'success';
        this.alert_message = 'Message successfully sent';
      },
      (error) => {
        this.alert_type = 'danger';
        this.alert_message = 'Message failed. Please send email to whdenver@vapewh.com';
      }
      );
  }


}
