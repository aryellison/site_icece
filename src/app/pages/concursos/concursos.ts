import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Concurso {
  tipo: 'aberto' | 'andamento' | 'concluido';
  titulo: string;
  orgao: string;
  imagem?: string;
  periodo?: string;
  iconClass?: string;
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
  bannerImage: string = '/assets/images/nossos-servicos-conc.jpg';

  ngOnInit() {
    this.concursos = [
      {
        tipo: 'aberto',
        titulo: 'Concurso Aberto Exemplo 1',
        orgao: 'Orgão A',
        periodo: '01/01/2025 - 31/01/2025',
        iconClass: 'fas fa-file-alt',
      },
      {
        tipo: 'aberto',
        titulo: 'Concurso Aberto Exemplo 2',
        orgao: 'Orgão B',
        periodo: '10/01/2025 - 28/02/2025',
        iconClass: 'fas fa-file-alt',
      },
      {
        tipo: 'andamento',
        titulo: 'Edital de Seleção Simplificada Nº 001/2025 - CPSMAR',
        orgao: 'ICECE',
        iconClass: 'fas fa-file-alt',
      },
      {
        tipo: 'concluido',
        titulo: 'Concurso Público Nº 001/2024 - Câmara de Fortim/CE',
        orgao: 'Câmara Municipal',
        iconClass: 'fas fa-file-alt',
      },
      {
        tipo: 'concluido',
        titulo: 'Concurso Público Nº 001/2024 - Guarda Municipal de Aratuba',
        orgao: 'Município de Aratuba',
        iconClass: 'fas fa-file-alt',
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
