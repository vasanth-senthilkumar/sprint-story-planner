import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';
import { StoryComponent } from './story/story.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { StoryListComponent } from './story-list/story-list.component';

const routes: Routes = [
  { path: '', component: SprintComponent },
  { path: 'story', component: StoryComponent },
  { path: 'sprint-list', component: SprintListComponent },
  { path: 'story-list', component: StoryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
