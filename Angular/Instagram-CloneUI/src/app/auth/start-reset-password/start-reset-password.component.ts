import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForStartResetPassword } from 'src/app/models/userForStartResetPassword';
import { AuthService } from 'src/app/services/auth.service';
import { MessagerService } from 'src/app/services/messager.service';
@Component({
  selector: 'app-start-reset-password',
  templateUrl: './start-reset-password.component.html',
  styleUrls: ['./start-reset-password.component.css']
})
export class StartResetPasswordComponent implements OnInit {
  startResetPasswordForm:FormGroup;
  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private router:Router,
    private messager:MessagerService) { }

  ngOnInit(): void {
    this.createStartResetPasswordForm();
  }
  createStartResetPasswordForm(){
    this.startResetPasswordForm = this.formBuilder.group({
      userName:["",Validators.required]
    })
  }
  onSubmit(){
    var data:UserForStartResetPassword=Object.assign({},this.startResetPasswordForm.value);
    this.authService.startResetPassword(data).subscribe(
      result=>{
        this.messager.successWithSwal(result);
        this.router.navigate(['/auth/reset-password/'+result.data]);
      },
      errorResult=>this.messager.error(errorResult));
  }

}
