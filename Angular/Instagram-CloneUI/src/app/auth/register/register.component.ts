import { UserForRegister } from './../../models/userForRegister';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagerService } from 'src/app/services/messager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  buttonCss="opacity: .4; cursor:context-menu;"

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private messager:MessagerService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group(
      {
        userName:["",Validators.required],
        email:["",Validators.required],
        fullName:["",Validators.required],
        gender:["",Validators.required],
        birthDate:["",Validators.required],
        password:["",Validators.required],
        rePassword:["",Validators.required],
      }
    )
  }
  onRegister(){
     if(this.registerForm.valid==false){
      this.messager.customSwal({
        title: 'Hata!',
        text: 'Formu eksiksiz doldurun',
        icon: 'error',
        confirmButtonText: 'Tamam'
      })
      return;
     }
     var data:UserForRegister= Object.assign({}, this.registerForm.value);
     this.authService.register(data).subscribe(result=>{
       this.messager.successWithSwal(result);
      this.router.navigate(['/auth/activate/'+result.data.id]);
     },errorResult=>this.messager.error(errorResult));
  }
  keyUpFormValid(){
    this.buttonCss=(this.registerForm.valid==true)?
    "opacity: 1; cursor:pointer;":
    "opacity: .4; cursor:context-menu;";
  }

}
