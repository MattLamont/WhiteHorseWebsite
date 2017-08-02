import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from '../blog.service'
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-listing-view',
  templateUrl: './blog-listing-view.component.html',
  styleUrls: ['./blog-listing-view.component.css']
})
export class BlogListingViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';
  public blogs: any;

  constructor(private titleService: Title, private metaService: Meta, private blogService: BlogService,
  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Blog | White Horse Vapor Denver');
    this.blogService
    .getBlogs()
    .subscribe(
    (blogs) => {
      this.blogs = blogs
      this.blogService.blogs = blogs;
      console.log( this.blogService.blogs );
    },
    (error) => {
      const newLink = ['404'];
      this.router.navigate(newLink);
    }
    );
  }

  onBlogPostClick( id: number ){
    const newLink = ['/blog' , id ];
    this.router.navigate(newLink);
  }

}
