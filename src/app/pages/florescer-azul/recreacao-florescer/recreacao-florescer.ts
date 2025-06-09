import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recreacao-florescer',
  imports: [RouterModule, RouterModule],
  templateUrl: './recreacao-florescer.html',
  styleUrl: './recreacao-florescer.css',
})
export class RecreacaoFlorescer {
  interatividadeImage: string = '/assets/images/interatividade.jpg';
  experienciaAprendizagemImage: string = '/assets/images/exp-e-aprend.jpg';
  ideasImage: string = '/assets/images/ideas.jpg';
}
