import { ToastrService } from 'ngx-toastr';
import { UserForRegister } from './../../models/userForRegister';
import { AuthModule } from './../auth.module';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

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
    private toastr:ToastrService,
    private router:Router
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
      Swal.fire({
        title: 'Hata!',
        text: 'Formu eksiksiz doldurun',
        icon: 'error',
        confirmButtonText: 'Tamam'
      })
      return;
     }
     var data:UserForRegister= Object.assign({}, this.registerForm.value);
     this.authService.register(data).subscribe(result=>{
       Swal.fire({
        title: 'Başarılı!',
        text: result.message,
        icon: 'success',
        confirmButtonText: 'Tamam'
      })
      this.router.navigate(['/auth/activate/'+result.data.id]);
     },errorResult=>{
      errorResult.error.Message.split("--").forEach((el:string) => {
        this.toastr.error(el);
      });
     });
  }
  keyUpFormValid(){
    this.buttonCss=(this.registerForm.valid==true)?
    "opacity: 1; cursor:pointer;":
    "opacity: .4; cursor:context-menu;";
  }

}
