import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  images=[
    "/assets/images/img-1.png",
    "/assets/images/img-2.png",
    "/assets/images/img-3.png",
    "/assets/images/img-4.png"
  ]
  imgUrl="/assets/images/img-4.png"

  buttonCss="opacity: .4;"

  constructor() { }

  ngOnInit(): void {
    this.imageAnimation();
  }
  imageAnimation():void{
    var obj=this;
    setInterval(function(){
      for (let index = 0; index < obj.images.length; index++) {
        var element=obj.images[index]
        if(element==obj.imgUrl){

          obj.imgUrl=
          (obj.images[index+1]==undefined)?
          "/assets/images/img-1.png":obj.images[index+1]
          break;
        }

      }
    },3000);
  }

}
