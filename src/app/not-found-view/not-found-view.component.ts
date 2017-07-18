import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.css']
})
export class NotFoundViewComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    //set HTML title tag for SEO
    this.titleService.setTitle('404 | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'robots', content: 'noindex' });
  }

  ngOnDestroy(){
  }

}
