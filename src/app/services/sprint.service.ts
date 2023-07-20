import { Injectable } from '@angular/core';
import { Sprint } from '../model/sprint.model';

@Injectable({
    providedIn: 'root'
})
export class SprintService {
    private sprints: Sprint[] = [];
    private currentSprintId = 1;

    constructor() { }

    getAllSprints(): Sprint[] {
        return this.sprints;
    }

    addSprint(sprint: Sprint): void {
        sprint.id = this.currentSprintId++;
        this.sprints.push(sprint);
    }

    updateSprint(sprint: Sprint): void {
        const index = this.sprints.findIndex(s => s.id === sprint.id);
        if (index !== -1) {
            this.sprints[index] = sprint;
        }
    }

    deleteSprint(sprintId: number): void {
        this.sprints = this.sprints.filter(s => s.id !== sprintId);
    }

    getCreatedSprints(): Sprint[] {
        return this.sprints;
    }
}
