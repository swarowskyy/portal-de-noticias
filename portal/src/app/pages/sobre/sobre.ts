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
  nome = 'Francy L. S.';
  cargo = 'Desenvolvedor Full Stack em Formação';
  frase = '"A parte mais difícil é centralizar."';
  
  techs = ['TypeScript', 'Node.js', 'HTML', 'GitHub', 'Angular', 'Tailwind'];
}