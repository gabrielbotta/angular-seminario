import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Angular Fundamentos';

  rotas = [
    { path: '/inicio', nome: '0. Início' },
    { path: '/components', nome: '1. Components' },
    { path: '/binding', nome: '2. Data Binding' },
    { path: '/fluxo', nome: '3. @if / @for' },
    { path: '/comunicacao', nome: '4. Pai e Filho' },
    { path: '/signals', nome: '5. Signals e Service' },
    { path: '/api', nome: '6. Form + API + Pipes' },
  ];
}
