import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagerService {

  constructor(private toastr:ToastrService) { }
  error(errorResult:any){
    if(typeof errorResult=="string"){
      this.toastr.error(errorResult);
      return;
    }
    if(errorResult.error==null){
      this.toastr.error("Bilinmeyen hata oluştu!");
      return;
    }
    if(errorResult.error.Message==undefined && typeof errorResult.error != "string"){
      this.toastr.error(errorResult.statusText);
      return;
    }
    if(errorResult.error.Message==undefined){
      this.toastr.error(errorResult.error);
      return;
    }
    errorResult.error.Message.split("--").forEach((el:string) => {
      this.toastr.error(el);
    });
  }
  successWithSwal(result:any){
    Swal.fire({
      title: 'Başarılı!',
      text: result.message,
      icon: 'success',
      confirmButtonText: 'Tamam'
    });
  }
  customSwal(option:any){
    Swal.fire(option);
  }
}
