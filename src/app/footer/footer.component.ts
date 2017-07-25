import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { environment } from 'environments/environment';

import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [BindoApiService]
})
export class FooterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService) { }

  public email: Email;

  public email_address: string;

  public alert_message = '';
  public alert_type = 'danger';
  private email_sent = false;

  ngOnInit() {
  }

  sendEmail() {

    console.log(this.email_address);

    if (this.email_sent === true) {
      this.alert_message = 'Email has already been sent';
      return;
    }

    if (this.email_address.length === 0) {
      this.alert_message = 'Please enter an email address';
      return;
    }

    const body =
      'The following user has requested to be added to the White Horse mailing list: ' + '\n\n' +
      'Email: ' + this.email_address + '\n';

    this.email = new Email(
      'contact@whvapor.com',
      environment.contactEmail,
      'New User for Email List',
      body);

    this.alert_type = 'success';
    this.alert_message = 'Sending message...';

    this.email_sent = true;

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

  onDepartmentClick(name) {
    const newLink = ['/department', name];
    this.router.navigate(newLink);
  }

  onPageLinkClick(name) {
    const newLink = [name];
    this.router.navigate(newLink);
  }

}
