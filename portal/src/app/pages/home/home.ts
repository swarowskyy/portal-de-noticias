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
      imagem: 'https://picsum.photos/id/1/400/250' // Imagem aleatória para teste
    },
    {
      titulo: 'Tailwind CSS v4: O fim dos arquivos de configuração?',
      resumo: 'A nova versão foca em "Zero-Runtime" e uma integração ainda mais profunda com o motor de renderização do navegador.',
      categoria: 'CSS',
      data: '30 Mar, 2026',
      imagem: 'https://picsum.photos/id/2/400/250'
    },
    {
      titulo: 'IA na Programação: Produtividade ou Dependência?',
      resumo: 'Um debate sobre como as ferramentas de Copilot estão mudando o mercado de trabalho para desenvolvedores Junior.',
      categoria: 'Carreira',
      data: '29 Mar, 2026',
      imagem: 'https://picsum.photos/id/3/400/250'
    }
  ];

}
