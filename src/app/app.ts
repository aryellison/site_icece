import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class App {
  title = 'site-icece';
}
