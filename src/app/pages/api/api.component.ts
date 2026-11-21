import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe],
  template: `
    <h2>Formulário, API e Pipes</h2>

    <section>
      <h3>Nova Tarefa</h3>
      <form #form="ngForm" (ngSubmit)="adicionar()">
        <input
          name="titulo"
          [(ngModel)]="novoTitulo"
          #campo="ngModel"
          required
          minlength="3"
          placeholder="Título da tarefa"
        />
        <button type="submit" [disabled]="form.invalid">Adicionar</button>

        @if (campo.invalid && campo.touched) {
          <p class="erro">Mínimo de 3 caracteres.</p>
        }
      </form>
    </section>

    <section>
      <h3>Lista ({{ dataConsulta | date: 'dd/MM/yyyy HH:mm' }})</h3>

      @if (carregando) {
        <p>Carregando...</p>
      } @else if (erro) {
        <p class="erro">{{ erro }}</p>
      } @else {
        <ul>
          @for (item of tarefas; track item.id) {
            <li>
              {{ item.title | uppercase }} - {{ item.completed ? 'Concluída' : 'Pendente' }}
            </li>
          }
        </ul>
      }
    </section>
  `,
  styles: `
    .erro {
      color: red;
      font-size: 13px;
    }
  `,
})
export class ApiComponent implements OnInit {
  private http = inject(HttpClient);

  tarefas: Todo[] = [];
  carregando = false;
  erro = '';
  novoTitulo = '';
  dataConsulta = new Date();

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.carregando = true;
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .subscribe({
        next: (dados) => {
          this.tarefas = dados;
          this.dataConsulta = new Date();
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar dados.';
          this.carregando = false;
        },
      });
  }

  adicionar(): void {
    const titulo = this.novoTitulo.trim();
    if (!titulo) return;

    this.tarefas = [
      { id: this.tarefas.length + 1, title: titulo, completed: false },
      ...this.tarefas,
    ];
    this.novoTitulo = '';
  }
}
