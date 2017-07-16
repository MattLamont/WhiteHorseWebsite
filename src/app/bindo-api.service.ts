import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Email} from './models/email';

const BINDO_API_URL = environment.bindoApiUrl;

@Injectable()
export class BindoApiService {

  constructor(
    private http: Http
  ) {

  }

  public getDepartments() {

    return this.http
      .get(BINDO_API_URL + '/departments')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getListings(params: String) {
    return this.http
      .get(BINDO_API_URL + '/listings' + params)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getCustomers() {

  }

  public postEmail(email: Email): Observable<Email> {

    return this.http
      .post(BINDO_API_URL + '/email', email)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public authAdmin( email: string , password: string ): Observable<any> {
      const json = {
        'email' : email,
        'password' : password
      };

      return this.http
        .post(BINDO_API_URL + '/admin/login', json)
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
