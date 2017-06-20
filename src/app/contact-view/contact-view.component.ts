import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'My first AGM project';
  lat: number = 39.6158629;
  lng: number = -105.0932672;
  zoom: number = 14;

}
