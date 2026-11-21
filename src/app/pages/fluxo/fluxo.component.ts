import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  id: number;
  texto: string;
}

@Component({
  selector: 'app-fluxo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Controle de Fluxo</h2>

    <section>
      <h3>&#64;if / &#64;else</h3>
      @if (logado) {
        <p>Usuário logado.</p>
      } @else {
        <p>Usuário desconectado.</p>
      }
      <button (click)="logado = !logado">
        {{ logado ? 'Sair' : 'Entrar' }}
      </button>
    </section>

    <section>
      <h3>&#64;for / &#64;empty</h3>
      <input
        type="text"
        [(ngModel)]="novaTarefa"
        (keyup.enter)="adicionar()"
        placeholder="Nova tarefa"
      />
      <button (click)="adicionar()">Adicionar</button>

      <ul>
        @for (item of tarefas; track item.id) {
          <li>
            {{ item.texto }}
            <button (click)="remover(item.id)">Remover</button>
          </li>
        } @empty {
          <p>Nenhuma tarefa na lista.</p>
        }
      </ul>
    </section>
  `,
})
export class FluxoComponent {
  logado = false;
  novaTarefa = '';
  private proximoId = 4;

  tarefas: Tarefa[] = [
    { id: 1, texto: 'Tarefa 1' },
    { id: 2, texto: 'Tarefa 2' },
    { id: 3, texto: 'Tarefa 3' },
  ];

  adicionar(): void {
    const texto = this.novaTarefa.trim();
    if (!texto) return;
    this.tarefas.push({ id: this.proximoId++, texto });
    this.novaTarefa = '';
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter((t) => t.id !== id);
  }
}
