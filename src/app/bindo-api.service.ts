import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const BINDO_API_URL = environment.bindoApiUrl;

@Injectable()
export class BindoApiService {

  constructor(
      private http: Http
  ) {

  }

  public getDepartments() {

      return this.http
        .get( BINDO_API_URL + '/departments' )
        .map( response => {
            return response.json();
        })
        .catch( this.handleError );
  }

  public getListings( params: String ) {
      return this.http
        .get( BINDO_API_URL + '/listings' + params )
        .map( response => {
            return response.json();
        })
        .catch( this.handleError );
  }

  public getCustomers() {

  }

  private handleError( error: Response | any ) {
      console.error( error );
      return Observable.throw( error );
  }

}
