import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';
import { AlertModule } from 'ngx-bootstrap';

import {Listing} from '../models/listing';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [BindoApiService]
})
export class ProductViewComponent implements OnInit {

  private sub: any;
  private product_id: string;

  public listing: Listing;

  public name: string = "";
  public email_address: string = "";
  public text: string = "";
  private subject: string = "";
  private email_sent: boolean = false;
  private email: Email;

  public alert_message: string;
  public alert_type: string = 'danger';

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService) {
  }

  ngOnInit() {

    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.product_id = params['id'];

      const url_params = '/' + this.product_id;

      this.bindoApiService
        .getListings(url_params)
        .subscribe(
        (listing) => {
          this.listing = listing.data.listing;
        }
        );
    });
  }

  sendEmail() {

    if (this.email_sent == true) {
      this.alert_message = 'Email has already been sent';
      return;
    }

    if (this.name.length == 0) {
      this.alert_message = 'Please enter a name';
      return;
    }

    if (this.email_address.length == 0) {
      this.alert_message = 'Please enter an email address';
      return;
    }

    if (this.text.length == 0) {
      this.alert_message = 'Please enter a message';
      return;
    }

    let body =
      'Name: ' + this.name + '\n' +
      'Email: ' + this.email_address + '\n' +
      'Subject: Product Inquiry\n' +
      'Product: ' + this.listing.name + '\n' +
      'Product Number: ' + this.listing.product_id + '\n' +
      'Manufacturer: ' + this.listing.brand_name + '\n' +
      'Message:\n\n' +
      this.text;

    this.email = new Email(
      'product.inquiry@whitehorsevapor.com',
      'matthewlamont454@gmail.com',
      this.subject,
      body);

    this.email_sent = true;
    this.alert_type = 'success';
    this.alert_message = 'Sending email...';

    this.bindoApiService
      .postEmail(this.email)
      .subscribe(
      (res) => {
        this.alert_type = 'success';
        this.alert_message = 'Email successfully sent';
      }
      );
  }


}
