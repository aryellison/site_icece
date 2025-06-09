import { Routes } from '@angular/router';
import { TrabalheConosco } from './pages/trabalhe-conosco/trabalhe-conosco';
import { Contato } from './pages/contato/contato';
import { FlorescerAzul } from './pages/florescer-azul/florescer-azul';
import { Home } from './home/home/home';
import { Concursos } from './pages/concursos/concursos';
import { Cursos } from './pages/cursos/cursos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'florescer-azul', component: FlorescerAzul },
  { path: 'trabalhe-conosco', component: TrabalheConosco },
  { path: 'contato', component: Contato },
  { path: 'concursos', component: Concursos },
  { path: 'cursos', component: Cursos },
];
