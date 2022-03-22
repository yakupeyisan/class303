import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string = ''
  products:Product[]=[]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void{
    this.productService.getAll(this.name).subscribe(result=>{
      this.products=result;
    },error=>{
      console.log(error);
    })
  }


}
