import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse,Response } from '../models/response';
import { PostAdd, PostLike, PostSave, ViewPostInformation } from '../models/viewPostInformation';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://localhost:5001/api/posts';
  constructor(private httpClient:HttpClient) { }
  getAllPosts():Observable<DataResponse<ViewPostInformation[]>>{
    return this.httpClient.get<DataResponse<ViewPostInformation[]>>(this.apiUrl+"/get-all");
  }
  likePost(postLike:PostLike):Observable<Response>{
    return this.httpClient.post<Response>(this.apiUrl+"/like",postLike);
  }
  unLikePost(postLike:PostLike):Observable<Response>{
    return this.httpClient.post<Response>(this.apiUrl+"/un-like",postLike);
  }
  savePost(postSave:PostSave):Observable<Response>{
    return this.httpClient.post<Response>(this.apiUrl+"/save",postSave);
  }
  unSavePost(postSave:PostSave):Observable<Response>{
    return this.httpClient.post<Response>(this.apiUrl+"/un-save",postSave);
  }
  addPost(postAdd:PostAdd):Observable<Response>{
    console.log(postAdd);
    return this.httpClient.post<Response>(this.apiUrl+"/add",postAdd);
  }


}
