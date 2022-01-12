import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _registerservice: RegisterService ,public router: Router ) { }
  loginForm = new FormGroup({
    userName: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
  })
  public user: any;
  public errorMsg: any;
  public users: any;
  ngOnInit(): void {
  }
  clickEvent(){
    console.log('hi')
  }
  login(){
    let item = {
      userName: this.loginForm.controls['userName'].value,
      emailId: this.loginForm.controls['emailId'].value,
      password: this.loginForm.controls['password'].value
    }
    this._registerservice.login(item).subscribe(
      (data: any) => {
        const newUser = data.user;
        console.log(newUser)
        // this.users.push(newUser);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.router.navigate(['/landing-page/home'])
      },
      (error) => (this.errorMsg = error)
    );
  }

}
