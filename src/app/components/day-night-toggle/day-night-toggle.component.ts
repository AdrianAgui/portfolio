import { Component } from '@angular/core';
import { Themes } from 'src/app/theme/symbols';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-day-night-toggle',
  templateUrl: './day-night-toggle.component.html',
  styleUrls: ['./day-night-toggle.component.scss']
})
export class DayNightToggleComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === Themes.LIGHT) {
      this.themeService.setTheme(Themes.DARK);
    } else {
      this.themeService.setTheme(Themes.LIGHT);
    }
  }
}
