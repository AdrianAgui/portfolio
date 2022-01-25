import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-dropdown',
  templateUrl: './lang-dropdown.component.html',
  styleUrls: ['./lang-dropdown.component.scss']
})
export class LangDropdownComponent implements OnInit {
  faAngleDown = faAngleDown;
  currentLang!: string;

  constructor(private readonly translator: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translator.currentLang;
    this.translator.onLangChange.subscribe(
      (langEvent) => (this.currentLang = langEvent.lang)
    );
  }

  lang(lang: string) {
    this.translator.use(lang);
  }
}
