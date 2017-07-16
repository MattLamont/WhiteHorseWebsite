import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {BindoApiService} from '../bindo-api.service';
import { SharedDataService } from '../shared-data.service';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

  public navbarState = 'out';


  constructor(private route: ActivatedRoute, private router: Router,
    private bindoApiService: BindoApiService, private sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.departments = this.sharedDataService.departments;
  }


  clickLink(name) {
    this.toggleNavbar();
    const newLink = ['/department', name];
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

  clickBlogLink() {
    this.toggleNavbar();
    const newLink = ['/blog'];
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
