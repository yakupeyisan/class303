import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[]=[]
  filterTitle:string=""
  filterBody:string=""
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts():void{
    this.postService.getAll(this.filterTitle,this.filterBody).subscribe(result=>{
      this.posts=result;
    },error=>{
      console.log(error);
    })
  }
}
