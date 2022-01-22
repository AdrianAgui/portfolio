import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ComponentsModule, SharedModule],
  exports: [MainComponent]
})
export class PagesModule {}
