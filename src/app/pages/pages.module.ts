import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SectionsModule } from './../sections/sections.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SectionsModule],
  exports: [MainComponent]
})
export class PagesModule {}
