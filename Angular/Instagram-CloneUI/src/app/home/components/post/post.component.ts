import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from 'src/app/models/photo';
import { PostComment, PostLike, PostSave, ViewPostInformation } from 'src/app/models/viewPostInformation';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: ViewPostInformation;
  commentForm:FormGroup;
  constructor(private postService:PostService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.post.photos.length>0){
      this.post.photos[0].isActive=true;
    }
    this.createCommentForm();
  }
  createCommentForm():void{
    this.commentForm=this.formBuilder.group({
      postId:['',Validators.required],
      comment: ['', Validators.required]
    });
  }
  changeImage(image: any) {
    this.post.photos.forEach(image => {
      image.isActive = false;
    });
    image.isActive = true;
  }
  savePost(){
    this.post.isSaved=true;
    var postSave:PostSave={
      userId:0,
      postId:this.post.id
    }
    this.postService.savePost(postSave).subscribe(result=>{
      this.post.isSaved=true;
    },errorResult=>{
      this.post.isSaved=false;
    });
  }
  unSavePost(){
    this.post.isSaved=false;
    var postSave:PostSave={
      userId:0,
      postId:this.post.id
    }
    this.postService.unSavePost(postSave).subscribe(result=>{
      this.post.isSaved=false;
    },errorResult=>{
      this.post.isSaved=true;
    });
  }
  likePost(){
    this.post.isLiked=true;
    this.post.likeCount++;
    var postLike:PostLike={
      userId:0,
      postId:this.post.id
    }
    this.postService.likePost(postLike).subscribe(result=>{
      this.post.isLiked=true;
    },errorResult=>{
      this.post.isLiked=false;
      this.post.likeCount--;
    });
  }
  unLikePost(){
    this.post.isLiked=false;
    this.post.likeCount--;
    var postLike:PostLike={
      userId:0,
      postId:this.post.id
    }
    this.postService.unLikePost(postLike).subscribe(result=>{
      this.post.isLiked=false;
    },errorResult=>{
      this.post.isLiked=true;
      this.post.likeCount++;
    });
  }
  togglePostLike(){
    if(this.post.isLiked){
      this.unLikePost();
    }else{
      this.likePost();
    }
  }
  togglePostSave(){
    if(this.post.isSaved){
      this.unSavePost();
    }else{
      this.savePost();
    }
  }
  onComment(){
    var comment:PostComment=Object.assign({},this.commentForm.value);
    comment.postId=this.post.id;
    console.log(comment);
  }

}
