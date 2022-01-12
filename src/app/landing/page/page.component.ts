import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('currentUser')
    this.route.navigate(['/landing-page/login'])
  }

}
