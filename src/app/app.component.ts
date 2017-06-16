import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private route: ActivatedRoute, private router: Router) {
  }


  onDepartmentLinkClicked(link: String) {
    let newLink = ['/department' , link ];
    this.router.navigate( newLink );
  }
}
