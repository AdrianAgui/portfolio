import { Component, HostListener } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showScroller = false;
  faArrowUp = faArrowUp;

  @HostListener('window:scroll', [''])
  onScroll() {
    this.showScroller = window.pageYOffset !== 0;
  }
}
