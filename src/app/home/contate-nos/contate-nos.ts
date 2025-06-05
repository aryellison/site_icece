import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contate-nos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contate-nos.html',
  styleUrl: './contate-nos.css',
})
export class ContateNos {
  sectionTitle = 'Contate-nos';

  nome: string = '';
  email: string = '';
  assunto: string = '';

  constructor() {}

  onSubmit() {
    console.log('Formulário enviado!', {
      nome: this.nome,
      email: this.email,
      assunto: this.assunto,
    });
    alert('Mensagem enviada! (Verifique o console para os dados)');
    this.nome = '';
    this.email = '';
    this.assunto = '';
  }
}
