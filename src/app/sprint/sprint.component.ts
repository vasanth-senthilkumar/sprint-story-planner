import { Component, OnInit } from '@angular/core';
import { SprintService } from '../services/sprint.service';
import { Sprint } from '../model/sprint.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
})
export class SprintComponent implements OnInit {
  sprints: Sprint[] = [];
  newSprint: Sprint = { id: 0, name: '', startDate: new Date(), endDate: new Date(), stories: [] };

  constructor(private sprintService: SprintService, private router: Router) { }

  ngOnInit(): void {
    this.sprints = this.sprintService.getAllSprints();
  }

  addSprint(): void {
    this.sprintService.addSprint(this.newSprint);
    this.newSprint = { id: 0, name: '', startDate: new Date(), endDate: new Date(), stories: [] };
    window.alert('Sprint Added Successfully');
    this.router.navigate(['/sprint-list']);
  }
}
