import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Themes } from 'src/app/theme/symbols';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  Themes = Themes;
  faEnvelope = faEnvelope;

  currentTheme!: string;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getActiveTheme().name;
    this.themeService.themeChange.subscribe((theme) => (this.currentTheme = theme.name));
  }
}
