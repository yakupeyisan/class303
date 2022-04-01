import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TimeLineComponent } from './timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { HashtagMentionColLibModule } from 'hashtag-mention-colorizer';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimeLineComponent,
    PostComponent,
    TopBarComponent,
    PostAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HashtagMentionColLibModule,
    NgxDropzoneModule
  ]
})
export class HomeModule { }
