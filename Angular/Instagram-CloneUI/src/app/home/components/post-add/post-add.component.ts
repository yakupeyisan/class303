import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostAdd } from 'src/app/models/viewPostInformation';
import { MessagerService } from 'src/app/services/messager.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  selectedFiles: File[] = [];
  postAddForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private postService:PostService,
    private messager:MessagerService,
    private router:Router) { }

  ngOnInit(): void {
    this.createPostAddForm();
  }
  createPostAddForm() {
    this.postAddForm = this.formBuilder.group({
      files: [null,Validators.required],
      location: ['',Validators.required],
      description: ['',Validators.required]
    });
  }
  onSubmit() {
    var data:PostAdd = Object.assign({},this.postAddForm.value);
    this.postService.addPost(data).subscribe(
      result=>{
        this.messager.successWithSwal(result);
        this.router.navigate(['/']);
      },
      errorResult=>this.messager.error(errorResult))
  }
  onSelect(event:any) {
    this.selectedFiles.push(...event.addedFiles);
    this.postAddForm.patchValue({files:this.getFileNames()})
    
  }
  onRemove(event:any) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(event), 1);
    this.postAddForm.patchValue({files:this.getFileNames()})
  }
  getFileNames() {
    var fileDatas:string[] = [];
    this.selectedFiles.forEach(file=>{
      this.getFileDataFromBase64(file).subscribe(data=>{
        fileDatas[fileDatas.length]=data;
        fileDatas.concat(data);
      })
    })
    return fileDatas;
  }
  //get blob data from file base64
  getFileDataFromBase64(file:File):Observable<any>{
    return new Observable(observer=>{
      var reader = new FileReader();
      reader.onload = (e:any) => {
        observer.next(e.target.result);
        observer.complete();
      };
      reader.readAsDataURL(file);
    });
  }

}