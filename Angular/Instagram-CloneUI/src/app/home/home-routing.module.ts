import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../guards/login.guard";
import { PostAddComponent } from "./components/post-add/post-add.component";
import { TimeLineComponent } from "./timeline/timeline.component";
const routes: Routes = [
    {path:"",component:TimeLineComponent,canActivate:[LoginGuard]},
    {path:"post-add",component:PostAddComponent,canActivate:[LoginGuard]},
]

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class HomeRoutingModule { }