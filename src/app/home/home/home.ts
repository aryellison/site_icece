import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { QuemSomos } from '../quem-somos/quem-somos';
import { NossosServicosComponent } from '../nossos-servicos/nossos-servicos';
import { TransparenciaComponent } from '../transparencia/transparencia';
import { ContateNos } from '../contate-nos/contate-nos';

@Component({
  selector: 'app-home',
  imports: [
    Banner,
    QuemSomos,
    NossosServicosComponent,
    TransparenciaComponent,
    ContateNos,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
