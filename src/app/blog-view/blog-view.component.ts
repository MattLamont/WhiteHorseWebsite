import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  private metaDefinition = 'White Horse Vapor Denver offers a variety of vaping products including Hardware, E-Liquid, Accessories, and much more.';
  public sub: any;
  public blog_id: any;
  public blogIndex: any;

  public blogs: any;
  public currentBlog: any;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private metaService: Meta, private blogService: BlogService) {}

  ngOnInit() {
    //set HTML title tag for SEO
    this.titleService.setTitle('Blog | White Horse Vapor Denver');
    //this.metaService.addTag({ name: 'description', content: this.metaDefinition });

    this.sub = this.route.params.subscribe(params => {
      this.blog_id = params['id'];

      if (this.blogService.blogs.length == 0) {
        this.blogService
          .getBlogs()
          .subscribe(
          (blogs) => {
            this.blogs = blogs
            this.blogService.blogs = blogs;
            this.currentBlog = this.blogs.find(this.findBlogPost, this);
            this.blogs.splice(this.blogIndex, 1);
            this.blogs = this.blogs.slice( 0 , 8 );
          },
          (error) => {
            const newLink = ['404'];
            this.router.navigate(newLink);
          });

      }
      else {
        this.blogs = this.blogService.blogs;
        this.currentBlog = this.blogs.find(this.findBlogPost, this);
        this.blogs.splice(this.blogIndex, 1);
        this.blogs = this.blogs.slice( 0 , 8 );
      }

    });

  }

  findBlogPost(element, index) {
    if (element.id == this.blog_id) {
      this.blogIndex = index;
      return true;
    }
    return false;
  }

  onBlogPostClick( id: number ){
    const newLink = ['/blog/' + id];
    this.router.navigate(newLink);
  }

}
