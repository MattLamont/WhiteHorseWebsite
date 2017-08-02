import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogService {

  public blogs = [];

  constructor(
    private http: Http
  ) {

  }

  public getBlogs() {

    return this.http
      .get('http://www.whvapor.com/blogs')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

}
