import { Component, OnInit } from '@angular/core';
import {BindoApiService} from '../bindo-api.service';
import {Email} from '../models/email';
import { AlertModule } from 'ngx-bootstrap';
import {ActivatedRoute} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
  providers: [BindoApiService]
})

export class ContactViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

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

  constructor(private route: ActivatedRoute, private bindoApiService: BindoApiService,
    private titleService: Title, private metaService: Meta) { }

  ngOnInit() {

    //set HTML title tag for SEO
    this.titleService.setTitle('Contact | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });

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
      'contact@whvapor.com',
      environment.contactEmail,
      this.subject,
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
