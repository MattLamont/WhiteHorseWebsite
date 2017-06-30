import { Component, OnInit } from '@angular/core';
import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';
import { AlertModule } from 'ngx-bootstrap';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
  providers: [BindoApiService]
})

export class ContactViewComponent implements OnInit {

  public email: Email;

  public name = '';
  public email_address = '';
  public phone = '';
  public subject = '';
  public message = '';

  public alert_message = '';
  public alert_type = 'danger';
  private email_sent = false;

  public title = 'My first AGM project';
  public lat = 39.6158629;
  public lng = -105.0932672;
  public zoom = 14;

  constructor(private route: ActivatedRoute, private bindoApiService: BindoApiService) { }

  ngOnInit() {

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

    if (this.subject.length === 0) {
      this.alert_message = 'Please enter a subject';
      return;
    }

    if (this.message.length === 0) {
      this.alert_message = 'Please enter a message';
      return;
    }

    const body =
      'Name: ' + this.name + '\n' +
      'Phone: ' + this.phone + '\n' +
      'Email: ' + this.email_address + '\n' +
      'Subject: ' + this.subject + '\n' +
      'Message:\n\n' +
      this.message;

    this.email = new Email(
      'contact@whitehorsevapor.com',
      'matthewlamont454@gmail.com',
      this.subject,
      body);

    this.email_sent = true;

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
