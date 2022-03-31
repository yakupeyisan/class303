import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../models/response';
import { ViewPostInformation } from '../models/viewPostInformation';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://localhost:5001/api/posts';
  constructor(private httpClient:HttpClient) { }
  getAllPosts():Observable<DataResponse<ViewPostInformation[]>>{
    return this.httpClient.get<DataResponse<ViewPostInformation[]>>(this.apiUrl+"/get-all");
  }

}
