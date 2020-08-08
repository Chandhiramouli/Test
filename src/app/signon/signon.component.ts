import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctorreg } from '../doctorreg.model';


@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {


  submitted=false;
  doctorreg:Doctorreg =new Doctorreg();
  constructor(private doctorService: DoctorService) { }
  
  registor(){
    this.submitted=true
      this.save()
   }
   Doctorreg()
   {
     this.submitted=false;
     this.doctorreg=new Doctorreg();
   } 
   save()
{
  this.doctorService.postDoctor(this.doctorreg)
  .subscribe(data => console.log(data), error => console.log(error));
  this.doctorreg=new Doctorreg();
}
  ngOnInit() {
  }

}
