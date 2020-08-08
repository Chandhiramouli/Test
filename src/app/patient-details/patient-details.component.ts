import { Component, OnInit } from '@angular/core';


import { Enduser } from '../enduser.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  users: any;
  title: any;


  constructor(private userService: UserService) { }
  toggle = false;
  status = 'Uncured'; 

  coronoVirusChecking(event) {
    var targetEle = event.srcElement.attributes.class;
    
    console.log(targetEle)

  this.toggle = !this.toggle;
  this.status = this.toggle ? 'Cured' : 'Uncured';
}

  ngOnInit() {
    return this.userService.getUsers()
      .subscribe(data => this.users=data)
    
  }

}
