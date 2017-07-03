import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  constructor( private titleService: Title) { }

  ngOnInit() {
      //set HTML title tag for SEO
      this.titleService.setTitle( 'About' );
  }

}
