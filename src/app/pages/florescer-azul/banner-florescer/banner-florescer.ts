import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-florescer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner-florescer.html',
  styleUrls: ['./banner-florescer.css'],
})
export class BannerFlorescerComponent {
  descriptionText: any;
  onVerMaisClick() {
    throw new Error('Method not implemented.');
  }
  logoSrc: string = '/assets/images/florescer-azul-logo.png';
  bannerBgSrc: string = '/assets/images/banner-florescer-azul.jpg';
  circularLogoSrc: any;

  constructor() {}
}
