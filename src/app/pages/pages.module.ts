import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, SharedModule],
  exports: [HomeComponent]
})
export class PagesModule {}
