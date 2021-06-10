import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  menu_onClick(navigateTo : string){
    alert(navigateTo);
    this._router.navigate([navigateTo]);
  }

}
