import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    //set HTML title tag for SEO
    this.titleService.setTitle('Blog | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });
  }

}
