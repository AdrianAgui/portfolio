import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme, Themes } from './symbols';

@Injectable()
export class ThemeService {
  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
    const hour = new Date().getHours();
    hour > 6 && hour < 20
      ? this.setTheme(Themes.LIGHT)
      : this.setTheme(Themes.DARK);
  }

  getActiveTheme() {
    const theme = this.themes.find((t) => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;
  }

  setTheme(name: string) {
    this.theme = name;
    this.themeChange.emit(this.getActiveTheme());
  }
}
