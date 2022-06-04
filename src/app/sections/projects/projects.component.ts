import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './project.interface';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() {
    this.projects = projects;
  }
}
