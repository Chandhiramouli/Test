import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Doctorreg } from './doctorreg.model';
import { observable, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  ApiUrl="http://localhost:9191/Get";
  Apiurl="http://localhost:9191/Post"
//  postUser: any;

  constructor(private _http:HttpClient) { }

  getUser(){
    return this._http.get<Doctorreg[]>(this.ApiUrl);
  }
  postDoctor(Doctorreg: Object): Observable<Object>{
    return this._http.post((this.Apiurl),Doctorreg);
  }

  
}