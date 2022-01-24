import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { darkTheme, lightTheme } from './theme/theme';
import { Themes } from './theme/symbols';

import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: Themes.LIGHT
    }),
    PagesModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
