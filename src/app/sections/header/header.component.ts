import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Themes } from 'src/app/theme/symbols';
import { ThemeService } from './../../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private readonly translator: TranslateService) {}

  lang(lang: string) {
    this.translator.use(lang);
  }
}
