import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { SectionsModule } from './../sections/sections.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SectionsModule, SharedModule],
  exports: [MainComponent]
})
export class PagesModule {}
