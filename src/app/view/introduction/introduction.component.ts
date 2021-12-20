import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  public users: Array<any> = [];
  public errorMsg: string = '';

  constructor(private _userservice: HttpService) {}

  ngOnInit(): void {
    // this._userservice.getUsers().subscribe(
    //   (data) => (this.users = data),
    //   (error) => (this.errorMsg = error)
    // );
  }
  ngAfterViewChecked() {
    // this._userservice.getUsers().subscribe(
    //   (data) => (this.users = data),
    //   (error) => (this.errorMsg = error)
    // );
    console.log('hi')
  }
}
