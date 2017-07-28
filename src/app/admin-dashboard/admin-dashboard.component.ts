import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AlertModule } from 'ngx-bootstrap';
import { TabsetComponent } from 'ngx-bootstrap';
import {ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers:[AdminService]
})
export class AdminDashboardComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private adminService: AdminService) {
  }

  public email = '';
  public password = '';

  public alert_message: string;
  public alert_type = 'danger';

  public isAuthenticated = false;

  public config = {toolbar : 'Basic', uiColor: '#FFFFFF'};

  ngOnInit() {
  }


  public submit(){

      this.adminService
        .postAdminLogin( this.email , this.password)
        .subscribe(
        (res) => {
          this.adminService.apiKey = res.token;
          console.log( this.adminService.apiKey );
          this.isAuthenticated = true;
      },
      (error) => {
          this.alert_message = "Login failed. Please try again";
      }
        );
  }

  public skip(){
      this.email = 'vapedenver@gmail.com';
      this.password = 'whitehorseDenver2017';
      this.submit();
  }

}
