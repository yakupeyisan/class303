import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TimeLineComponent } from './timeline/timeline.component';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    TimeLineComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
