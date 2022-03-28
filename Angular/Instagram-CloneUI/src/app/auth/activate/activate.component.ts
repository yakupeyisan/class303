import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForActivate } from 'src/app/models/userForActivate';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  activateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private authService:AuthService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createActivateForm();
    this.route.params.subscribe(params=>{
       this.activateForm.patchValue({
        userId:params['id']
       });
    });
  }
  createActivateForm(){
    this.activateForm=this.formBuilder.group({
      userId:['',Validators.required],
      code:['',Validators.required]
    });
  }
  onActivate():void{ 
    if(!this.activateForm.valid){
      this.toastr.error("Formu eksiksiz doldurun");
      console.error(this.activateForm.errors);
      return;
    }
    var data:UserForActivate= Object.assign({}, this.activateForm.value);
    this.authService.activate(data).subscribe(result=>{
      this.toastr.success(result.message);
      //angular redirect login page
      this.router.navigate(['/auth/login']);
    },errorResult=>{
      if(errorResult.error.Message==undefined)
      {
        this.toastr.error(errorResult.error);
        return;
      }
      errorResult.error.Message.split("--").forEach((el:string) => {
        this.toastr.error(el);
      });
    });
  }

}
