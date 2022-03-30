import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/models/userForLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  images=[
    "/assets/images/img-1.png",
    "/assets/images/img-2.png",
    "/assets/images/img-3.png",
    "/assets/images/img-4.png"
  ]
  imgUrl="/assets/images/img-4.png"

  buttonCss="opacity: .4;"

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.imageAnimation();
    this.createLoginForm();
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
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  onLogin(){
    var data:UserForLogin=Object.assign({},this.loginForm.value);
    this.authService.login(data).subscribe(
      result=>{
        localStorage.setItem("token",result.data.token);
        localStorage.setItem("expiration",result.data.expiration.toString());
        this.router.navigate(["/"]);
      },
      errorResult=>{
        console.log(errorResult);
      }
    )
  }

}
