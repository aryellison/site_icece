import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projeto-florescer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projeto-florescer.html',
  styleUrl: './projeto-florescer.css',
})
export class ProjetoFlorescer {
  handsImage: string = '/assets/images/hands-fa.jpg';
  logoSrc: string = '/assets/images/florescer-azul-logo.png';

  constructor() {}
}
