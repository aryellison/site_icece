import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Banner } from './home/banner/banner';
import { QuemSomos } from './home/quem-somos/quem-somos';
import { NossosServicosComponent } from './home/nossos-servicos/nossos-servicos';
import { TransparenciaComponent } from './home/transparencia/transparencia';
import { ContateNos } from './home/contate-nos/contate-nos';
import { TrabalheConosco } from './pages/trabalhe-conosco/trabalhe-conosco';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Banner,
    QuemSomos,
    NossosServicosComponent,
    TransparenciaComponent,
    ContateNos,
    TrabalheConosco,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'site-icece';
}
