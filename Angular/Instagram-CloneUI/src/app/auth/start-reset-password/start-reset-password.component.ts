import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForStartResetPassword } from 'src/app/models/userForStartResetPassword';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
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
    private toastr:ToastrService) { }

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
        Swal.fire({
          title: 'Başarılı!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'Tamam'
        });
        this.router.navigate(['/auth/reset-password/'+result.data]);
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
