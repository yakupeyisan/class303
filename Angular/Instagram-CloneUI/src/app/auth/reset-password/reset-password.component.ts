import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService) { }
  ngOnInit(): void {
    this.createResetPasswordForm();
  }
  createResetPasswordForm(){
    this.resetPasswordForm = this.formBuilder.group({
      code:["",Validators.required],
      password:["",Validators.required],
      rePassword:["",Validators.required]
    })
  }
  //onSubmit with auth service
  onSubmit(){
    var data:any=Object.assign({},this.resetPasswordForm.value);
    this.authService.resetPassword(data).subscribe(
      result=>{
        Swal.fire({
          title: 'Başarılı!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'Tamam'
        });
        this.router.navigate(['/auth/login']);
      },
      errorResult=>{
        if(errorResult.error.Message==undefined){
          this.toastr.error(errorResult.error);
          return;
        }
        errorResult.error.Message.split("--").forEach((el:string) => {
          this.toastr.error(el);
        });
      }
    )
  }
}
