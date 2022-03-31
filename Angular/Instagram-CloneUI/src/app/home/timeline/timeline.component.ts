import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewPostInformation } from 'src/app/models/viewPostInformation';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {
  posts:ViewPostInformation[]=[];
  constructor(private postService:PostService,private router:Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts(){
    this.postService.getAllPosts().subscribe(result=>{
      this.posts=result.data;
    });
  }


}
