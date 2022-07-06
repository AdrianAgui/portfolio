import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { Project } from 'src/app/sections/projects/project.interface';
import { IntersectionService } from 'src/app/services/intersection.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements AfterViewInit {
  @Input() project: Project = {} as Project;
  @ViewChild('container') container!: ElementRef;

  animateProject = false;

  faLink = faLink;
  faCode = faCode;

  constructor(private readonly intersectionService: IntersectionService) {}

  ngAfterViewInit(): void {
    this.intersectionService
      .createAndObserve(this.container)
      .pipe(filter((isVisible: boolean) => isVisible))
      .subscribe(() => {
        if (this.animateProject) {
          return;
        }
        this.animateProject = true;
      });
  }
}
