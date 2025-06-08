import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  address = 'Rua Eucalipto, 132, Cajazeiras, Fortaleza/Ce';
  phone = '(85) 2136.7291 ';
  email = 'icece.instituto@gmail.com';

  currentYear = new Date().getFullYear();
}
