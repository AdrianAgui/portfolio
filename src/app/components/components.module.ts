import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [TitleComponent, AboutMeComponent, SkillsComponent],
  imports: [CommonModule, SharedModule],
  exports: [TitleComponent]
})
export class ComponentsModule {}
