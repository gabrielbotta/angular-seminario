import { Component } from '@angular/core';
import { ItemVotoComponent } from './item-voto.component';

interface Opcao {
  id: number;
  nome: string;
  votos: number;
}

@Component({
  selector: 'app-comunicacao',
  standalone: true,
  imports: [ItemVotoComponent],
  template: `
    <h2>Comunicação Pai e Filho</h2>

    <section>
      <h3>Total de votos: {{ totalVotos }}</h3>
      @for (opcao of opcoes; track opcao.id) {
        <app-item-voto
          [nome]="opcao.nome"
          [votos]="opcao.votos"
          (votou)="registrarVoto(opcao.id)"
        />
      }
    </section>
  `,
})
export class ComunicacaoComponent {
  opcoes: Opcao[] = [
    { id: 1, nome: 'Angular', votos: 0 },
    { id: 2, nome: 'React', votos: 0 },
    { id: 3, nome: 'Vue', votos: 0 },
  ];

  get totalVotos(): number {
    return this.opcoes.reduce((soma, item) => soma + item.votos, 0);
  }

  registrarVoto(id: number): void {
    this.opcoes = this.opcoes.map((item) =>
      item.id === id ? { ...item, votos: item.votos + 1 } : item
    );
  }
}
