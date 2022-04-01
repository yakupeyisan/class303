import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { UserForActivate } from 'src/app/models/userForActivate';
import { AuthService } from 'src/app/services/auth.service';
import { MessagerService } from 'src/app/services/messager.service';

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
    private router:Router,
    private messager:MessagerService) { }

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
      this.messager.error("Formu eksiksiz doldurun");
      console.error(this.activateForm.errors);
      return;
    }
    var data:UserForActivate= Object.assign({}, this.activateForm.value);
    this.authService.activate(data).subscribe(result=>{
      this.messager.successWithSwal(result);
      this.router.navigate(['/auth/login']);
    },errorResult=>this.messager.error(errorResult));
  }

}
