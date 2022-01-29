import { Component, OnInit } from '@angular/core';
import { Themes } from 'src/app/theme/symbols';
import { ThemeService } from './../../theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Themes = Themes;

  currentTheme!: string;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getActiveTheme().name;
    this.themeService.themeChange.subscribe(
      (theme) => (this.currentTheme = theme.name)
    );
  }
}
