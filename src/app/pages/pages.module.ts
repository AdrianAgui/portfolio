import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SectionsModule } from './../sections/sections.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SectionsModule, FontAwesomeModule],
  exports: [MainComponent]
})
export class PagesModule {}
