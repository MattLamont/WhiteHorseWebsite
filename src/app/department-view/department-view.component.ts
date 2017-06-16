import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  private sub: any;
  private department: String;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.department = params['name'];
    });
  }

  onProductClick(){
      let newLink = ['/product' , 123 ];
      this.router.navigate( newLink );
  }


}
