import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainComponent } from './main/main.component';
import { SectionsModule } from './../sections/sections.module';
import { ComponentsModule } from './../components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FontAwesomeModule, SectionsModule, ComponentsModule],
  exports: [MainComponent]
})
export class PagesModule {}
