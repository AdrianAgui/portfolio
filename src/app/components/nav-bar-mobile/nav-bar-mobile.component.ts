import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent {
  isNavOpen = false;
  isChecked = false;

  toggleNav() {
    document.getElementById('sidenav')!.style.width = this.isNavOpen
      ? '0'
      : '100%';
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    document.getElementById('sidenav')!.style.width = '0';
    (document.getElementById('check') as HTMLInputElement).checked = false;
    this.isNavOpen = false;
  }
}
