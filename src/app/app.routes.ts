import { Routes } from '@angular/router';
import { TrabalheConosco } from './pages/trabalhe-conosco/trabalhe-conosco';

export const routes: Routes = [
  {
    path: 'trabalhe-conosco',
    loadComponent: () =>
      import('./pages/trabalhe-conosco/trabalhe-conosco').then(
        (m) => m.TrabalheConosco
      ),
  },
];
