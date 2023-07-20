import { Component } from '@angular/core';
import { Story } from '../model/sprint.model';
import { SprintService } from '../services/sprint.service';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
})
export class StoryListComponent {

  stories: Story[] = [];
  newStory: Story = { id: 0, title: '', description: '', status: '', sprintId: 1 };
  editMode = false;
  selectedStory: Story | null = null;
  availableSprints: number[] = [];
  selectedStoryId: number | null = null;

  constructor(private sprintService: SprintService,
    private storyService: StoryService) { }

  ngOnInit(): void {
    this.stories = this.storyService.getAllStories();
    this.availableSprints = this.sprintService.getCreatedSprints().map(sprint => sprint.id);
  }

  updateStory(): void {
    // Check if selectedStory is not null and its sprintId is a valid number
    if (this.selectedStory?.sprintId !== undefined) {
      this.storyService.updateStory(this.selectedStory);
      this.selectedStory = null;
      this.editMode = false;
      window.alert('Story Updated Successfully')
    }
  }

  editStory(story: Story): void {
    this.selectedStory = { ...story };
    this.editMode = true;
  }

  cancelEdit(): void {
    this.selectedStory = null;
    this.editMode = false;
  }
}
