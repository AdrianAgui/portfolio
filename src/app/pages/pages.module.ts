import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, TranslateModule],
  exports: [HomeComponent]
})
export class PagesModule {}
