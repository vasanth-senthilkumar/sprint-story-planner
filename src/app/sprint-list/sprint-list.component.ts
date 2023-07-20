import { Component } from '@angular/core';
import { Sprint } from '../model/sprint.model';
import { SprintService } from '../services/sprint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
})
export class SprintListComponent {

  constructor(private sprintService: SprintService, private router: Router) { }

  sprints: Sprint[] = [];
  newSprint: Sprint = { id: 0, name: '', startDate: new Date(), endDate: new Date(), stories: [] };
  editMode = false;
  selectedSprint: Sprint | null = null;

  ngOnInit(): void {
    this.sprints = this.sprintService.getAllSprints();
  }

  editSprint(sprint: Sprint): void {
    this.selectedSprint = { ...sprint };
    this.editMode = true;
  }

  updateSprint(): void {
    if (this.selectedSprint) {
      this.sprintService.updateSprint(this.selectedSprint);
      this.selectedSprint = null;
      this.editMode = false;
      window.alert('Sprint Updated Successfully')
    }
  }

  cancelEdit(): void {
    this.selectedSprint = null;
    this.editMode = false;
  }

  deleteSprint(sprintId: number): void {
    const shouldDelete = confirm('Are you sure you want to delete this sprint?');
    if (shouldDelete) {
      if (sprintId !== undefined) {
        this.sprintService.deleteSprint(sprintId);
        this.router.navigate(['/']);
      }
    }

  }

}
