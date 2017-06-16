import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {BindoApiService} from '../bindo-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [BindoApiService]
})
export class NavbarComponent implements OnInit {

  private bindoApiService: BindoApiService;

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
  ];

  constructor() { }

  ngOnInit() {
      /*
    this.bindoApiService
      .getDepartments()
      .subscribe(
      (departments) => {
        console.log(departments);
      }
  );*/
  }

  @Output()
  navigateLink: EventEmitter<String> = new EventEmitter();

  clickLink( link : String ){
      this.navigateLink.emit( link );
  }

}
