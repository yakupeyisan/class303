import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  localhost:4200/auth/register
const routes: Routes = [
  {path:"auth",loadChildren: 
  () => import('./auth/auth.module')
  .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
