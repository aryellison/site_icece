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
  cards = [
    {
      img: '/assets/images/familias.jpg',
      title: 'Famílias Atendidas',
      description: 'Apoio direto a centenas de famílias vulneráveis.',
      finalCount: 480,
      animatedValue: 0,
    },
    {
      img: '/assets/images/eventos.jpg',
      title: 'Eventos',
      description: 'Ações organizadas para engajamento da comunidade.',
      finalCount: 32,
      animatedValue: 0,
    },
    {
      img: '/assets/images/profissionais.jpg',
      title: 'Profissionais',
      description: 'Equipe dedicada em diversas áreas do projeto.',
      finalCount: 57,
      animatedValue: 0,
    },
  ];

  ngOnInit(): void {
    this.cards.forEach((card, i) => {
      this.animate(0, card.finalCount, 1500, (val) => {
        this.cards[i].animatedValue = val;
      });
    });
  }

  animate(
    start: number,
    end: number,
    duration: number,
    callback: (val: number) => void
  ): void {
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
}
