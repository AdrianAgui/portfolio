import { Component, OnInit } from '@angular/core';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  faLink = faLink;
  faCode = faCode;

  isMobile = false;

  ngOnInit(): void {
    if (window.matchMedia('(max-width: 900px)').matches) {
      this.isMobile = true;
    }
  }
}
