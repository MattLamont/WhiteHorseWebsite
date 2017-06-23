import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onDepartmentClick( name , id ) {
    const newLink = ['/department', name , id];
    this.router.navigate(newLink);
  }

  onPageLinkClick( name ) {
    const newLink = [ name ];
    this.router.navigate(newLink);
  }

}
