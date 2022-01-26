import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DayNightToggleComponent } from './day-night-toggle/day-night-toggle.component';
import { LangDropdownComponent } from './lang-dropdown/lang-dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    TitleComponent,
    DayNightToggleComponent,
    LangDropdownComponent,
    NavBarComponent
  ],
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  exports: [
    TitleComponent,
    DayNightToggleComponent,
    LangDropdownComponent,
    NavBarComponent
  ]
})
export class ComponentsModule {}
