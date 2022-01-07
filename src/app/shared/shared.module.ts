import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';

const LABELS_PATH = './assets/i18n/';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, LABELS_PATH, '.json');
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule, HeaderComponent]
})
export class SharedModule {}
