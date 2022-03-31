import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ViewPostInformation } from 'src/app/models/viewPostInformation';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: ViewPostInformation;
  constructor() { }

  ngOnInit(): void {
    if(this.post.photos.length>0){
      this.post.photos[0].isActive=true;
    }
  }
  changeImage(image: any) {
    this.post.photos.forEach(image => {
      image.isActive = false;
    });
    image.isActive = true;
  }
}
