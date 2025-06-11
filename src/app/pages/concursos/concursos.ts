import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Concurso {
  tipo: 'aberto' | 'andamento' | 'concluido';
  titulo: string;
  orgao: string;
  imagem?: string;
  periodo?: string;
  icon?: string;
}

@Component({
  selector: 'app-concursos-florescer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concursos.html',
  styleUrls: ['./concursos.css'],
})
export class Concursos implements OnInit {
  concursos: Concurso[] = [];

  ngOnInit() {
    this.concursos = [
      {
        tipo: 'aberto',
        titulo: 'Concurso Aberto Exemplo 1',
        orgao: 'Orgão A',
        periodo: '01/01/2025 - 31/01/2025',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.708-2.836a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852L17.25 10.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Ícone de nota/documento
      },
      {
        tipo: 'aberto',
        titulo: 'Concurso Aberto Exemplo 2',
        orgao: 'Orgão B',
        periodo: '10/01/2025 - 28/02/2025',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.234 7.02l4.634 4.633M16.5 19.5H18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5H6.75A2.25 2.25 0 004.5 6.75v12.75A2.25 2.25 0 006.75 22.5H17.25M9 12.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>', // Ícone de arquivo/pasta
      },
      {
        tipo: 'andamento',
        titulo: 'Edital de Seleção Simplificada Nº 001/2025 - CPSMAR',
        orgao: 'ICECE',
        // imagem: '/assets/images/concursos/cpsmar.jpg',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.181m0-4.992l-3.181 3.181M15.042 2.25L17.5 4.75m0 0l2.5-2.5M16.023 9.348H4.992v-.001m0 0L2.985 19.644m0 0h4.992" /></svg>', // Ícone de refresh/processo
      },
      {
        tipo: 'concluido',
        titulo: 'Concurso Público Nº 001/2024 - Câmara de Fortim/CE',
        orgao: 'Câmara Municipal',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Ícone de check
      },
      {
        tipo: 'concluido',
        titulo: 'Concurso Público Nº 001/2024 - Guarda Municipal de Aratuba',
        orgao: 'Município de Aratuba',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Ícone de check
      },
    ];
  }

  get concursosAbertos(): Concurso[] {
    return this.concursos.filter((c) => c.tipo === 'aberto');
  }

  get concursosEmAndamento(): Concurso[] {
    return this.concursos.filter((c) => c.tipo === 'andamento');
  }

  get concursosConcluidos(): Concurso[] {
    return this.concursos.filter((c) => c.tipo === 'concluido');
  }

  temConcursosAbertos(): boolean {
    return this.concursosAbertos.length > 0;
  }
}
