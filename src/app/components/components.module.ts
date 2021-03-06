import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DayNightToggleComponent } from './day-night-toggle/day-night-toggle.component';
import { LangDropdownComponent } from './lang-dropdown/lang-dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { StarsComponent } from './stars/stars.component';
import { SocialsComponent } from './socials/socials.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    TitleComponent,
    DayNightToggleComponent,
    LangDropdownComponent,
    NavBarComponent,
    NavBarMobileComponent,
    TooltipComponent,
    StarsComponent,
    SocialsComponent,
    ProjectComponent
  ],
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  exports: [
    TitleComponent,
    DayNightToggleComponent,
    LangDropdownComponent,
    NavBarComponent,
    NavBarMobileComponent,
    TooltipComponent,
    StarsComponent,
    SocialsComponent,
    ProjectComponent
  ]
})
export class ComponentsModule {}
