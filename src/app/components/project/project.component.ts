import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
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

  isMobile = false;

  ngOnInit(): void {
    if (window.matchMedia('(max-width: 900px)').matches) {
      this.isMobile = true;
    }
  }
}
