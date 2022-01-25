import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { darkTheme, lightTheme } from './theme/theme';
import { Themes } from './theme/symbols';

import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { PagesModule } from './pages/pages.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const LABELS_PATH = './assets/i18n/';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, LABELS_PATH, '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: Themes.DARK
    }),
    PagesModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
