import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:3000/products"
  constructor(private httpClient:HttpClient) { }

  getAll(name:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl+'?name_like='+name);
  }

}
