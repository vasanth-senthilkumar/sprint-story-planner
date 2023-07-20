import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SprintComponent } from './sprint/sprint.component';
import { StoryComponent } from './story/story.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SprintComponent,
    StoryComponent,
    SprintListComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
