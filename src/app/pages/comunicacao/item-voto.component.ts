import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item-voto',
  standalone: true,
  template: `
    <div class="linha">
      <span>{{ nome() }}: {{ votos() }} votos</span>
      <button (click)="votou.emit()">Votar</button>
    </div>
  `,
  styles: `
    .linha {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
  `,
})
export class ItemVotoComponent {
  nome = input.required<string>();
  votos = input<number>(0);
  votou = output<void>();
}
