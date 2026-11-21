import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <h2>{{ titulo }}</h2>
    <p>{{ subtitulo }}</p>
  `,
})
export class InicioComponent {
  titulo = 'Projeto Angular';
  subtitulo = 'Sistemas para Internet - Frameworks Front-End';
}
