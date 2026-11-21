import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <h2>Signals e Service</h2>

    <section>
      <p>Preço unitário: {{ servico.precoUnitario | currency: 'BRL' }}</p>
      <p>Quantidade: {{ servico.quantidade() }}</p>
      <p>Total: {{ servico.total() | currency: 'BRL' }}</p>

      <button (click)="servico.diminuir()">-1</button>
      <button (click)="servico.aumentar()">+1</button>
      <button (click)="servico.zerar()">Zerar</button>
    </section>
  `,
})
export class SignalsComponent {
  protected servico = inject(PedidoService);
}
