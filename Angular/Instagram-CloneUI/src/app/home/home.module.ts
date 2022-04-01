import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TimeLineComponent } from './timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { HashtagMentionColLibModule } from 'hashtag-mention-colorizer';
import { TopBarComponent } from './components/top-bar/top-bar.component';



@NgModule({
  declarations: [
    TimeLineComponent,
    PostComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HashtagMentionColLibModule
  ]
})
export class HomeModule { }
