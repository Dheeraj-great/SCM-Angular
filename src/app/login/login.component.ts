import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Login} from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new Login();
  constructor(private _router: Router) { }
  users: any[]=[
    {
      userName: "harsha",
      password: "harsha"
    },
    {
      userName: "dheeraj",
      password: "dheeraj"
    },
    {
      userName: "bhargav",
      password: "bhargav"
    },
    {
      userName: "bala",
      password: "bala"
    }
  ];

  IsAuthorized=false;

  btnLogin_Click(){    
    const name=this.login.userName;
    const password=this.login.password;
    const user = this.users.filter(currUser => currUser.userName === name && currUser.password === password)[0];
    if (user) {
      this.IsAuthorized=true;
      this._router.navigate(['/app-layout']);
    } 
    else {
      this.IsAuthorized=false;
      // this._router.navigate(['/login']);
      alert('Login Failed');
    }   
  }

  ngOnInit(): void {
  }
}
