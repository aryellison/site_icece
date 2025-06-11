import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerFlorescerComponent } from './banner-florescer/banner-florescer';
import { ProjetoFlorescer } from './projeto-florescer/projeto-florescer';
import { RecreacaoFlorescer } from './recreacao-florescer/recreacao-florescer';
import { ImpactoFlorescer } from './impacto-florescer/impacto-florescer';
import { EventosFlorescer } from './eventos-florescer/eventos-florescer';

@Component({
  selector: 'app-florescer-azul',
  standalone: true,
  imports: [
    RouterModule,
    BannerFlorescerComponent,
    ProjetoFlorescer,
    RecreacaoFlorescer,
    ImpactoFlorescer,
    EventosFlorescer,
  ],
  templateUrl: './florescer-azul.html',
  styleUrl: './florescer-azul.css',
})
export class FlorescerAzul {}
