import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recreacao-florescer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './recreacao-florescer.html',
  styleUrls: ['./recreacao-florescer.css'],
})
export class RecreacaoFlorescer {
  cards = [
    {
      title: 'Interatividade',
      imageUrl: '/assets/images/interatividade.jpg',
      altText: 'Crianças com as mãos para cima em um círculo',
    },
    {
      title: 'Exploração e Aprendizagem',
      imageUrl: '/assets/images/exp-e-aprend.jpg',
      altText: 'Crianças brincando em uma mesa redonda',
    },
    {
      title: 'Criatividade',
      imageUrl: '/assets/images/ideas.jpg',
      altText: 'Mão segurando uma lâmpada acesa',
    },
  ];

  constructor() {}
}
