import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  buttonCss="opacity: .4;"
  constructor(private formBuilder:FormBuilder) {}

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
      alert("Formu eksiksiz doldurun");
      return;
     }
     var data= Object.assign({}, this.registerForm.value);
     console.log(data);
  }

}
