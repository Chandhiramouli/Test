import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
	CommonModule]
  })

export class Enduser {
    id:Number;
	patientNo:Number;
	name:String;
	email:String;
	password:String;
	mobileNo:Number;
	age:Number;
    gender:String;
	address:String; 
	bloodPressure:Number;
	bodyTemperature:Number;

}	
