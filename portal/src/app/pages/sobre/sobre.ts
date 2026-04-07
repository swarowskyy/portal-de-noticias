import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  // Dados que aparecerão na página
  nome = 'Luiza Swarowsky';
  cargo = 'Estudante de Informática para a Internet';
  frase = '"Aprendendo a aprender."';
  
  techs = ['TypeScript', 'Node.js', 'HTML', 'GitHub', 'Angular', 'Tailwind'];
}