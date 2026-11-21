import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>Componente Filho</h3>
      <p>{{ texto }}</p>
    </div>
  `,
  styles: `
    .card {
      border: 1px solid #999;
      padding: 12px;
      margin-bottom: 10px;
    }

    h3 {
      color: blue;
    }
  `,
})
export class CardComponent {
  texto = 'Instância reutilizável do componente.';
}
