
import { Observable } from 'rxjs';
import { UserForLogin } from './../models/userForLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForRegister } from '../models/userForRegister';
import { AccessToken, DataResponse, Response, User } from "../models/response"
import { UserForActivate } from '../models/userForActivate';
import { UserForStartResetPassword } from '../models/userForStartResetPassword';
import { UserForResetPassword } from '../models/userForResetPassword';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:5001/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(userForLogin:UserForLogin):Observable<DataResponse<AccessToken>>{
    return this.httpClient.post<DataResponse<AccessToken>>(this.apiUrl+"/login",userForLogin)
  }
  register(userForRegister:UserForRegister):Observable<DataResponse<User>>{
    return this.httpClient
      .post<DataResponse<User>>(this.apiUrl+"/register",userForRegister)
  }
  activate(userForActivate:UserForActivate):Observable<Response>{
    return this.httpClient
      .post<Response>(this.apiUrl+"/activate",userForActivate)
  }
  startResetPassword(userForStartResetPassword:UserForStartResetPassword):Observable<DataResponse<number>>{
    return this.httpClient
      .post<DataResponse<number>>(this.apiUrl+"/start-reset-password",userForStartResetPassword)
  }
  resetPassword(userForResetPassword:UserForResetPassword):Observable<Response>{
    return this.httpClient
      .post<Response>(this.apiUrl+"/reset-password",userForResetPassword)
  }
  isAuthenticated():Observable<boolean>{
    return this.httpClient.get<boolean>(this.apiUrl+"/is-authenticated");
  }

}
