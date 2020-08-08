import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Enduser } from '../enduser.model';
import { Router } from '@angular/router';
import  {NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  enduser:Enduser =new Enduser();
  message="";
  hideRequired="true";

  constructor(private userService: UserService,private route:Router) { }
  

  ngOnInit(): void {

  }  
  loginuser(){
    this.userService.loginUserFromRemote(this.enduser).subscribe(
      data =>
      {
          console.log("works",data);
      },    
      error => 
      {
        console.log(error);
        this.message="Invalid Email and Password";
      }  
    );
  }
}  
