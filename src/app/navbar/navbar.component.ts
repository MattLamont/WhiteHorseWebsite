import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {BindoApiService} from '../bindo-api.service';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [BindoApiService],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  public departments: Object = [];

  public navbarState: string = 'out';

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


  clickLink(name, id) {
    this.toggleNavbar();
    const newLink = ['/department', name, id];
    this.router.navigate(newLink);
  }

  clickAboutLink() {
    this.toggleNavbar();
    const newLink = ['/about'];
    this.router.navigate(newLink);
  }

  clickContactLink() {
    this.toggleNavbar();
    const newLink = ['/contact'];
    this.router.navigate(newLink);
  }

  clickLogoLink() {
    this.toggleNavbar();
    const newLink = ['/home'];
    this.router.navigate(newLink);
  }

  toggleNavbar() {
    this.navbarState = this.navbarState === 'out' ? 'in' : 'out';
  }

}
