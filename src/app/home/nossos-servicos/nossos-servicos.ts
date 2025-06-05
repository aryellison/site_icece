import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nossos-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nossos-servicos.html',
  styleUrls: ['./nossos-servicos.css'],
})
export class NossosServicosComponent {
  sectionTitle = 'Nossos Serviços';
  quote =
    'Serviço de qualidade é mais do que entregar um produto, é sobre entregar confiança e valor.';

  services = [
    {
      title: 'Cursos e Formações',
      subtitle: 'Capacitações e formações continuadas para servidores públicos',
      image: 'assets/images/nossos-servicos-cursos.jpg',
    },
    {
      title: 'Concursos e Seleções Públicas',
      subtitle: 'Processos Seletivos, exames e divulgação de resultados',
      image: 'assets/images/nossos-servicos-conc.jpg',
    },
    {
      title: 'Serviços Técnicos Especializados',
      subtitle:
        'Monitoramento de índices educacionais, recadastramento de servidores, perícia patrimonial de bens, gestão administrativa, consultoria técnica',
      image: 'assets/images/serv-tec-esp.jpg',
    },
  ];
}
