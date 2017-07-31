import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-listing-view',
  templateUrl: './blog-listing-view.component.html',
  styleUrls: ['./blog-listing-view.component.css']
})
export class BlogListingViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Blog | White Horse Vapor Denver');
    
  }

}
