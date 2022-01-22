import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    HomeComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [CommonModule, TranslateModule, SharedModule],
  exports: [AboutMeComponent, SkillsComponent, HomeComponent, FooterComponent]
})
export class ComponentsModule {}
