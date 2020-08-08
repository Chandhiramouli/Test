import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private _router: Router) { }
  login():void{
    this._router.navigate(['/login'])
     }
     Signon():void{
       this._router.navigate(['/signon'])
     }

  ngOnInit(): void {
  }

}
