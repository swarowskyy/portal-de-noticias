import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  noticias = [
    {
      titulo: 'Angular 19: O que esperar da nova era de Signals',
      resumo: 'A evolução da reatividade no Angular promete simplificar o gerenciamento de estados e aumentar a performance significativamente.',
      categoria: 'Frameworks',
      data: '31 Mar, 2026',
      imagem: 'https://i.pinimg.com/1200x/3e/a0/57/3ea057a4c7a954086b9577d17e14b83f.jpg' // Imagem aleatória para teste
    },
    {
      titulo: 'Tailwind CSS v4: O fim dos arquivos de configuração?',
      resumo: 'A nova versão foca em "Zero-Runtime" e uma integração ainda mais profunda com o motor de renderização do navegador.',
      categoria: 'CSS',
      data: '30 Mar, 2026',
      imagem: 'https://i.pinimg.com/736x/9f/85/e7/9f85e7c134e5e5796c67dd0a2b2a4d34.jpg'
    },
    {
      titulo: 'IA na Programação: Produtividade ou Dependência?',
      resumo: 'Um debate sobre como as ferramentas de Copilot estão mudando o mercado de trabalho para desenvolvedores Junior.',
      categoria: 'Carreira',
      data: '29 Mar, 2026',
      imagem: 'https://i.pinimg.com/736x/f9/cb/5f/f9cb5f5d2eba5e4fbdd82b8b0f9c972e.jpg'
    }
  ];

}
