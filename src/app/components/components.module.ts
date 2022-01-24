import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DayNightToggleComponent } from './day-night-toggle/day-night-toggle.component';

@NgModule({
  declarations: [TitleComponent, DayNightToggleComponent],
  imports: [CommonModule],
  exports: [TitleComponent, DayNightToggleComponent]
})
export class ComponentsModule {}
