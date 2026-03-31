import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para diretivas
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importante para o YouTube

@Component({
  selector: 'app-tuturiais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tuturiais.html',
  styleUrl: './tuturiais.css'
})
export class Tuturiais {
  
  // Lista de vídeos (IDs do YouTube)
videos = [
    { title: 'Angular em 5 minutos', id: '_6BxHqSBCv8', tech: 'Angular' },
    { title: 'Introdução ao Angular', id: 'Cz7DZgiUQJY', tech: 'Angular' },
    { title: 'Tailwind CSS', id: 'i_EKstz3x04', tech: 'Tailwind' },
    { title: 'Tailwind CSS em 100 segundos', id: 'lCxcTsOHrjo', tech: 'Tailwind' }
  ];
  // Injetando o "Sanitizer" no construtor
  constructor(private sanitizer: DomSanitizer) {}

  // Função que transforma o ID em uma URL de EMBED segura
  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}