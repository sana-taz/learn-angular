import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
  }
  constructor(private _registerservice: RegisterService , public fb:FormBuilder) {  }
  public newUser = { userName: '', emailId: '', password: '' };
  public user: any;
  public errorMsg: any;
  public users: any;
  register(){
    let item = {
      userName: this.registrationForm.controls['userName'].value,
      emailId: this.registrationForm.controls['emailId'].value,
      password: this.registrationForm.controls['password'].value
    }
    this._registerservice.register(item).subscribe(
      (data: any) => {
        const newUser = data.user;
        console.log(newUser)
        // this.users.push(newUser);
      },
      (error) => (this.errorMsg = error)
    );
  }

  

}
