import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService, private toastrService:ToastrService,
    private router:Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
        if(localStorage.getItem("token")==null){
            return false;
        }
        var response= this.authService.isAuthenticated()
        response.subscribe(
            result=>{
                if(result==false){
                    localStorage.removeItem("token");
                    localStorage.removeItem("expiration");
                    this.router.navigate(["/auth/login"]);
                    this.toastrService.info("You are not logged in");
                }
            });
        return response;
      }
  }
  