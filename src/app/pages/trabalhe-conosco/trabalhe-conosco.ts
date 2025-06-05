import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trabalhe-conosco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trabalhe-conosco.html',
  styleUrl: './trabalhe-conosco.css',
})
export class TrabalheConosco {
  selectedFileName: string = 'Clique para Anexar o Arquivo';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    } else {
      this.selectedFileName = 'Clique para Anexar o Arquivo';
    }
  }

  onSubmit(): void {
    console.log('Formulário de Trabalhe Conosco enviado!');
  }
}
