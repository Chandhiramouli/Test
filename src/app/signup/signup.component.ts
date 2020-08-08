import { Component, OnInit } from '@angular/core';

import { Enduser } from '../enduser.model';
import {UserService} from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted=false;
  constructor(private userService: UserService) { }

  enduser:Enduser =new Enduser();
  Gender=''
  onSubmit(){
   this.submitted=true
     this.save()
  }
  Enduser()
  {
    this.submitted=false;
    this.enduser=new Enduser();
  }
save()
{
  this.userService.postUser(this.enduser)
  .subscribe(data => console.log(data), error => console.log(error));
  this.enduser=new Enduser();
}

  ngOnInit():void {
   
  }

}
export class SelectNoRippleExample {}