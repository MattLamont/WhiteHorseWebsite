import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router) { }

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


  clickLink( link : String ){
      let newLink = ['/department' , link ];
      this.router.navigate( newLink );
  }

  clickAboutLink(){
      let newLink = ['/about'];
      this.router.navigate( newLink );
  }

  clickContactLink(){
      let newLink = ['/contact'];
      this.router.navigate( newLink );
  }

  clickLogoLink(){
      let newLink = ['/home'];
      this.router.navigate( newLink );
  }

}
