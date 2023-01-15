import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/sections/projects/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent {
  @Input() project: Project = {} as Project;

  faLink = faLink;
  faCode = faCode;
}
