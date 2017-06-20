import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {BindoApiService} from '../bindo-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [BindoApiService]
})
export class NavbarComponent implements OnInit {

  public departments = {};

  /*
    private departments = [
        'Hardware',
        'E-Liquid',
        'Accessories',
        'Wax and Dry Herb',
        'Apparel',
        'Drink',
        'White Horse Product',
        'Coils',
        'CBD Oil'
    ];*/

  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService) { }

  ngOnInit() {

    this.bindoApiService
      .getDepartments()
      .subscribe(
      (departments) => {
        this.departments = departments.data.departments;
      }
      );
  }


  clickLink( name , id ) {
    const newLink = ['/department', name , id];
    this.router.navigate(newLink);
  }

  clickAboutLink() {
    const newLink = ['/about'];
    this.router.navigate(newLink);
  }

  clickContactLink() {
    const newLink = ['/contact'];
    this.router.navigate(newLink);
  }

  clickLogoLink() {
    const newLink = ['/home'];
    this.router.navigate(newLink);
  }

}
