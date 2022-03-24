import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { StoryComponent } from './components/story/story.component';
import { ButtonbarComponent } from './components/buttonbar/buttonbar.component';
import { PostComponent } from './components/post/post.component';
import { StoriesComponent } from './components/stories/stories.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    StoryComponent,
    ButtonbarComponent,
    PostComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
