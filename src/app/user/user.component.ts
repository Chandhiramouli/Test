import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router) {}
 login():void{
this._router.navigate(['/login'])
 }
 SignUp():void{
   this._router.navigate(['/signup'])
 }
  ngOnInit(): void { 
  }

}
