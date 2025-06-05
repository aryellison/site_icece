import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.css',
})
export class QuemSomos {
  quemSomosTitlePart1 = 'QUEM';
  quemSomosTitlePart2 = 'SOMOS';

  oQueNosMoveTitle = 'O que nos move';
  oQueNosMoveText =
    'Convicção de que a excelência e a integridade são fundamentais para o desenvolvimento de uma sociedade mais justa e igualitária.';

  iceceIntroTitle = 'Instituto Cearense de educação, cultura e ecologia';
  iceceIntroText =
    'O Instituto Cearense de Educação, Cultura e Ecologia - ICECE, fundado em 2002, tem o compromisso de ser uma referência em excelência nos serviços de Educação, Concursos e Seleções Públicas, além de dedicarmos esforços significativos para o desenvolvimento social por meio do nosso projeto emblemático, Florescer Azul.';

  nossaMissaoTitle = 'Nossa Missão';
  nossaMissaoText =
    'Transciende a organização de concursos e seleções públicas. Desde nossa fundação, movidos pela nossa missão de manter a excelência e integridade, O ICECE se destaca por sua abordagem inovadora e meticulosa na condução de suas ações, garantindo processos transparentes, equitativos e de alta qualidade.';

  nossoCompromissoTitle = 'Nosso compromisso';
  nossoCompromissoText =
    'Com a excelência nos levou a ser reconhecidos como uma referência no setor, contribuindo significativamente para a seleção de profissionais qualificados que atendem às necessidades e expectativas das instituições públicas e da sociedade.';
}
