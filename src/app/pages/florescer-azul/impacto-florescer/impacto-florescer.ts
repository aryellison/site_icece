import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-impacto-florescer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './impacto-florescer.html',
  styleUrls: ['./impacto-florescer.css'],
})
export class ImpactoFlorescer implements OnInit {
  familiaImageSrc: string = '/assets/images/familias.jpg';
  eventosImageSrc: string = '/assets/images/eventos.jpg';
  profissionaisImageSrc: string = '/assets/images/profissionais.jpg';

  cards = [
    {
      img: this.familiaImageSrc,
      countGetter: () => this.count1,
      title: 'Famílias Atendidas',
      description: 'Apoio direto a centenas de famílias vulneráveis.',
    },
    {
      img: this.eventosImageSrc,
      countGetter: () => this.count2,
      title: 'Eventos',
      description: 'Ações organizadas para engajamento da comunidade.',
    },
    {
      img: this.profissionaisImageSrc,
      countGetter: () => this.count3,
      title: 'Profissionais',
      description: 'Equipe dedicada em diversas áreas do projeto.',
    },
  ];

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  showNumbers: boolean = false;

  ngOnInit(): void {
    this.animateCounts();
  }

  animateCounts() {
    this.showNumbers = true;
    this.animate(0, 480, 1000, (val) => (this.count1 = val));
    this.animate(0, 32, 1000, (val) => (this.count2 = val));
    this.animate(0, 57, 1000, (val) => (this.count3 = val));
  }

  animate(
    start: number,
    end: number,
    duration: number,
    callback: (val: number) => void
  ) {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
  familiasCount() {
    return this.count1;
  }
  eventosCount() {
    return this.count2;
  }
  profissionaisCount() {
    return this.count3;
  }
}
