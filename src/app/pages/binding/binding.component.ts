import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Data Binding</h2>

    <section>
      <h3>Interpolação</h3>
      <p>Curso: {{ curso }}</p>
      <p>10 + 5 = {{ 10 + 5 }}</p>
    </section>

    <section>
      <h3>Property Binding</h3>
      <button [disabled]="bloqueado">Ação</button>
      <button (click)="bloqueado = !bloqueado">
        {{ bloqueado ? 'Desbloquear' : 'Bloquear' }}
      </button>
    </section>

    <section>
      <h3>Event Binding</h3>
      <p>Cliques: {{ cliques }}</p>
      <button (click)="clicar()">+1</button>
      <button (click)="cliques = 0">Zerar</button>
    </section>

    <section>
      <h3>Two-Way Binding</h3>
      <input type="text" [(ngModel)]="nome" placeholder="Digite seu nome" />
      <p>Nome: {{ nome }}</p>
    </section>
  `,
})
export class BindingComponent {
  curso = 'Sistemas para Internet';
  bloqueado = true;
  cliques = 0;
  nome = '';

  clicar(): void {
    this.cliques++;
  }
}
