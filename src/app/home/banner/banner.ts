import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
    title = 'ICECE';
  quote = 'A educação é a arma mais poderosa que você pode usar para mudar o mundo.';
  author = 'Nelson Mandela';
}
