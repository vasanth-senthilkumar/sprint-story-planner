import { Injectable } from '@angular/core';
import { Story } from '../model/sprint.model';

@Injectable({
    providedIn: 'root'
})
export class StoryService {
    private stories: Story[] = [];

    constructor() { }

    getAllStories(): Story[] {
        return this.stories;
    }

    addStory(story: Story): void {
        this.stories.push(story);
    }

    updateStory(story: Story): void {
        const index = this.stories.findIndex(s => s.id === story.id);
        if (index !== -1) {
            this.stories[index] = story;
        }
    }

    deleteStory(storyId: number): void {
        this.stories = this.stories.filter(s => s.id !== storyId);
    }

}
