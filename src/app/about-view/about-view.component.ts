import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    //set HTML title tag for SEO
    this.titleService.setTitle('About | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });
  }

  ngOnDestroy() {
  }

}
