import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from './../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [CommonModule, TranslateModule, ComponentsModule],
  exports: [
    AboutComponent,
    SkillsComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ]
})
export class SectionsModule {}
