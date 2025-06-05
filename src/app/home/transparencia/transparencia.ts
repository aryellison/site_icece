import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocumentLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transparencia.html',
  styleUrls: ['./transparencia.css'],
})
export class TransparenciaComponent {
  sectionTitle: string = 'Transparência';
  explanationText: string =
    'No ICECE, prezamos pela transparência em todas as nossas ações e relações. Acreditamos que a clareza e a honestidade são fundamentais para construir confiança e fortalecer nossos vínculos com colaboradores, parceiros e clientes. Por isso, adotamos práticas que garantem a comunicação aberta, o acesso à informação e a responsabilidade em todas as nossas operações, assegurando que cada decisão e processo seja conduzido de forma ética e transparente.';

  documentLinks: DocumentLink[] = [
    {
      text: 'ICECE-Politica de Privacidade',
      url: 'assets/docs/ICECE-Politica-de-Privacidade.pdf',
    },
    {
      text: 'Florescer Azul-Politica de Privacidade',
      url: 'assets/docs/Florescer-Azul-Politica-de-Privacidade.pdf',
    },
    { text: 'ICECE-Estatuto', url: 'assets/docs/ICECE-Estatuto.pdf' },
  ];

  constructor() {}
}
