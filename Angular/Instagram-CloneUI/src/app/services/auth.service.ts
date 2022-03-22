import { UserForLogin } from './../models/userForLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:5001/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(userForLogin:UserForLogin){

  }

}
