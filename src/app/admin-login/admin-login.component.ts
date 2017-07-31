import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AlertModule } from 'ngx-bootstrap';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers:[AdminService]
})
export class AdminLoginComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  public email = '';
  public password = '';

  public alert_message: string;
  public alert_type = 'danger';

  ngOnInit() {
  }


  public submit(){

      this.adminService
        .postAdminLogin( this.email , this.password)
        .subscribe(
        (res) => {
          this.adminService.apiKey = res.token;
          const newLink = ['/admin/dashboard'];
          this.router.navigate(newLink);
      },
      (error) => {
          this.alert_message = "Login failed. Please try again";
      }
        );
  }

}