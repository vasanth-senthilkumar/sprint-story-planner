import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../model/sprint.model';
import { SprintService } from '../services/sprint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
})
export class StoryComponent implements OnInit {
  stories: Story[] = [];
  newStory: Story = { id: 0, title: '', description: '', status: '', sprintId: 1 };
  editMode = false;
  selectedStory: Story | null = null;
  availableSprints: number[] = [];
  selectedStoryId: number | null = null;
  message: string = '';

  constructor(private sprintService: SprintService,
    private storyService: StoryService, private router: Router) { }

  ngOnInit(): void {
    this.stories = this.storyService.getAllStories();
    this.availableSprints = this.sprintService.getCreatedSprints().map(sprint => sprint.id);
  }


  addStory(): void {
    // Check if a story with the same title already exists
    if (this.stories.some(story => story.title === this.newStory.title)) {
      this.showMessage('Error: A story with the same title already exists.');
      return;
    }
    // Add the new story to the list
    this.stories.push(this.newStory);
    // Clear the form fields
    this.newStory = { id: 0, title: '', description: '', status: '', sprintId: 1 };
    this.showMessage('Story added successfully.');
    window.alert('Story Added Successfully');
    this.router.navigate(['/story-list']);
  }

  showMessage(message: string): void {
    this.message = message;
    setTimeout(() => {
      this.hideMessage();
    }, 3000); // Hide the message after 3 seconds (adjust as needed)
  }

  hideMessage(): void {
    this.message = '';
  }

  deleteStory(storyId: number): void {
    this.storyService.deleteStory(storyId);
    this.router.navigate(['/story-list']);
  }

  deleteAllStory(): void {
    const shouldDelete = confirm('Are you sure you want to delete this story?');
    if (shouldDelete) {
      this.stories = []
      this.router.navigate(['/story-list']);

    }
  }

  onStorySelect(event: Event | null): void {
    if (event === null) {
      this.selectedStoryId = null;
      this.selectedStory = null;
    } else {
      const selectedValue = (event.target as HTMLSelectElement).value;
      this.selectedStoryId = selectedValue === '' ? null : +selectedValue;
      this.selectedStory = this.stories.find((story) => story.id === this.selectedStoryId) || null;
    }
    this.editMode = false; // Reset edit mode when a story is selected from the dropdown
  }

  deleteSelectedStory(): void {
    const shouldDelete = confirm('Are you sure you want to delete this story?');
    if (shouldDelete) {
      if (this.selectedStoryId !== null) {
        this.storyService.deleteStory(this.selectedStoryId);
        this.onStorySelect(null);
        this.router.navigate(['/story-list']); // Clear the selected story after deleting
      }
    }
  }
}
