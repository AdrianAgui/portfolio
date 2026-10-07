import { Component } from '@angular/core';

const BIRTH_DATE = { year: 1992, month: 6, day: 22 };

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  age = this.calculateAge();

  private calculateAge(): number {
    const today = new Date();
    const hadBirthday =
      today.getMonth() + 1 > BIRTH_DATE.month ||
      (today.getMonth() + 1 === BIRTH_DATE.month && today.getDate() >= BIRTH_DATE.day);
    return today.getFullYear() - BIRTH_DATE.year - (hadBirthday ? 0 : 1);
  }
}
