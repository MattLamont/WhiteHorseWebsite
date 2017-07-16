import { Component, OnInit } from '@angular/core';
import { BindoApiService } from '../bindo-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor( private bindoApiService: BindoApiService) { }

  public email = '';
  public password = '';

  public alert_message: string;
  public alert_type = 'danger';

  ngOnInit() {
  }

  public submit(){
      console.log( this.email + ' ' + this.password );
      this.bindoApiService
        .authAdmin( this.email , this.password)
        .subscribe(
        (res) => {
          console.log( 'auth success' );
      },
      (error) => {
          console.log( 'auth fail' );
      }
        );
  }

}
