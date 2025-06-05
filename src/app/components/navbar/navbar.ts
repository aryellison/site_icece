import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
