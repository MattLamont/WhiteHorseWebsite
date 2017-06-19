import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {BindoApiService} from '../bindo-api.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
  providers: [BindoApiService]
})
export class DepartmentViewComponent implements OnInit {

  private sub: any;
  private department: String;
  private department_id: String;

  private listings = {};

  constructor(private route: ActivatedRoute, private router: Router,
              private bindoApiService: BindoApiService) {
  }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.department = params['name'];
      this.department_id = params['id'];

      var url_params = "/?department_ids[]=" + this.department_id;

      this.bindoApiService
        .getListings( url_params )
        .subscribe(
        (listings) => {
          this.listings = listings.data.listings;
        }
        );
    });

  }

  onProductClick( blid: String){
      let newLink = ['/product' , blid ];
      this.router.navigate( newLink );
  }


}
