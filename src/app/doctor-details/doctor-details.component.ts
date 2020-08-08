import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

import { Doctorreg } from '../doctorreg.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctorreg: Doctorreg[];
  title: any;


  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    return this.doctorService.getUser()
    .subscribe(data => this.doctorreg=data)
  }

}
