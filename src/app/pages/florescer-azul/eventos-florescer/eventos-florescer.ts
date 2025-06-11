import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Evento {
  titulo: string;
  descricao: string;
  data: string;
  tempo: string;
  categorias: string[];
  imagem: string;
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eventos-florescer.html',
  styleUrls: ['./eventos-florescer.css'],
})
export class EventosFlorescer implements OnInit {
  eventos: Evento[] = [];

  ngOnInit(): void {
    this.eventos = Array(3).fill({
      titulo: 'Evento - Exemplo',
      descricao:
        'Junte-se a nós para um dia imersivo de aprendizado e criatividade no Workshop de Design Gráfico. Este evento é destinado a iniciantes que...',
      data: '30 de Janeiro',
      tempo: '10 minutos atrás',
      categorias: ['Design', 'Workshop'],
      imagem: '/assets/images/evento.jpg',
    });
  }
}
