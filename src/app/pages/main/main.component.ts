import { Component, HostListener } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showScroller = false;

  faArrowUp = faArrowUp;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  @HostListener('window:scroll', [''])
  onScroll() {
    this.showScroller = window.pageYOffset !== 0;
  }
}
