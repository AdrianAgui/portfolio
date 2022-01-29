import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;

  ngOnInit(): void {
    if (!window.matchMedia('(min-width: 900px)').matches) {
      this.isMobile = true;
    }
  }
}
