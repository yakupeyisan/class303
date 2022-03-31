import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../guards/login.guard";
import { TimeLineComponent } from "./timeline/timeline.component";
const routes: Routes = [
    {path:"",component:TimeLineComponent,canActivate:[LoginGuard]}
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class HomeRoutingModule { }