import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Enduser } from './enduser.model';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  postUsers() {
    throw new Error("Method not implemented.");
  }
  login() {
    throw new Error("Method not implemented.");
  }
  
  apiUrl="http://localhost:9191/get";
  apiUrl1="http://localhost:9191/post";
  apiurl2="http://localhost:9191/loginpost";
//  postUser: any;

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<Enduser[]>(this.apiUrl);
  
  }
  postUser(Enduser: Object): Observable<Object>{
    return this._http.post((this.apiUrl1),Enduser);
  }
  loginUserFromRemote(enduser : Enduser): Observable<any>{
    return this._http.post<any>((this.apiurl2),enduser);
  }
  
}