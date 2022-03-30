import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataResponse, User } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="http://localhost:5000/api/users";
  constructor(
    private httpClient:HttpClient,
    private router:Router
    ) { }
}
