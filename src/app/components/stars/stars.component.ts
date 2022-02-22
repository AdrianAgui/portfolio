import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from './../../services/session.service';

import 'animate.css';
import { CountUp } from 'countup.js';

declare const window: any;

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  faStar = faStar;

  showConfetti = false;

  star: any = {};

  private confetti: any;
  private likeCounts: CountUp | undefined;

  constructor(private readonly session: SessionService) {}

  ngOnInit(): void {
    this.setupConfetti();
    this.setupLikes();
    this.likeCounts = new CountUp(document.getElementById('totalLikes') as HTMLElement, 0);
  }

  like() {
    const subscription = this.session.getStars().subscribe((starsResponse: any[]) => {
      subscription.unsubscribe();

      const totalStars = starsResponse.map((s) => s.starred).length;

      if (!starsResponse.some((star: any) => star.id === this.session.getUniqueId())) {
        this.session.addStar().then(() => {
          if (this.likeCounts) this.likeCounts.update(totalStars + 1);
          this.fireConfetti();
        });
      } else {
        this.session.removeStar().subscribe(() => {
          if (this.likeCounts) this.likeCounts.update(totalStars - 1);
        });
      }
    });
  }

  fireConfetti() {
    this.showConfetti = true;

    this.fire(0.25, {
      spread: 26,
      startVelocity: 55
    });
    this.fire(0.2, {
      spread: 60
    });
    this.fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    this.fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    this.fire(0.1, {
      spread: 120,
      startVelocity: 45
    });

    setTimeout(() => {
      this.showConfetti = false;
    }, 500);
  }

  private setupLikes() {
    this.session.getStars().subscribe((starsResponse: any[]) => {
      if (this.likeCounts) this.likeCounts.update(starsResponse.length);
    });
  }

  private setupConfetti() {
    const canvas = document.getElementById('stars');
    this.confetti = window.confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
  }

  private fire(particleRatio: any, opts: any) {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    this.confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      })
    );
  }
}
