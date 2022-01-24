import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './../components/components.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const LABELS_PATH = './assets/i18n/';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, LABELS_PATH, '.json');
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
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
  exports: [TranslateModule, HeaderComponent, FooterComponent]
})
export class SharedModule {}
