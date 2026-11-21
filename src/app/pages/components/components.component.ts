import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h2>Components</h2>

    <section>
      <h3>Título do Componente Pai</h3>
      <app-card />
      <app-card />
    </section>
  `,
  styles: `
    h3 {
      color: red;
    }
  `,
})
export class ComponentsComponent {}
