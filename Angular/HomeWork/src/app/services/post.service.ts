import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) { }

  getAll(filterTitle:string,filterBody:string):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl+'?title_like='+filterTitle+'&body_like='+filterBody)
  }

}
