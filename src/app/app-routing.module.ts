import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UserComponent } from './user/user.component';

import { SignonComponent } from './signon/signon.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';


const routes: Routes = [
  {path:"patient-details",component:PatientDetailsComponent},
  {path:"doctor-details",component:DoctorDetailsComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"user",component:UserComponent},
 
  {path:"signup",component:SignupComponent},
  {
    path:"login",component:LoginComponent,
  },
  { 
    path:"signon",component:SignonComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignupComponent,PatientDetailsComponent,
  DoctorComponent,UserComponent,SignonComponent,DoctorDetailsComponent ]
