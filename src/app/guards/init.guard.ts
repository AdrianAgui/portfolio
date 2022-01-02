import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  constructor(private readonly translate: TranslateService) {}

  canActivate(): Observable<boolean> {
    this.translate.setDefaultLang('es');
    this.translate.use('es');

    return of(true);
  }
}
