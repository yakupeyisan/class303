import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessagerService } from 'src/app/services/messager.service';

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
    private messager:MessagerService) { }
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
        this.messager.successWithSwal(result);
        this.router.navigate(['/auth/login']);
      },
      errorResult=>this.messager.error(errorResult)
    )
  }
}
