import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, SharedModule],
  exports: [TitleComponent]
})
export class ComponentsModule {}
