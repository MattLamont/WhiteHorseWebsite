import { Component, OnInit } from '@angular/core';
import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';
import { AlertModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
  providers: [BindoApiService]
})

export class ContactViewComponent implements OnInit {

  constructor(private bindoApiService: BindoApiService) { }

  public email: Email;

  public name: string = "";
  public email_address: string = "";
  public phone: string = "";
  public subject: string = "";
  public message: string = "";

  public alert_message: string = "";
  private email_sent: boolean = false;

  ngOnInit() {

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

    if (this.subject.length == 0) {
      this.alert_message = 'Please enter a subject';
      return;
    }

    if (this.message.length == 0) {
      this.alert_message = 'Please enter a message';
      return;
    }

    let body =
      'Name: ' + this.name + '\n' +
      'Phone: ' + this.phone + '\n' +
      'Email: ' + this.email_address + '\n' +
      'Subject: ' + this.subject + '\n' +
      'Message:\n\n' +
      this.message;

    this.email = new Email(
      'contact@whitehorsevapor.com',
      'lindsey.stavile@gmail.com',
      this.subject,
      body);

    this.email_sent = true;

    this.bindoApiService
      .postEmail(this.email)
      .subscribe(
      (res) => {
        this.alert_message = 'Email successfully sent';
      }
      );
  }

  title: string = 'My first AGM project';
  lat: number = 39.6158629;
  lng: number = -105.0932672;
  zoom: number = 14;

}
