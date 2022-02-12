import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  section: string | null = '';

  constructor(private readonly route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment) => (this.section = fragment));
  }
}
