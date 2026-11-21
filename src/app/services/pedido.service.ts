import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  quantidade = signal<number>(1);
  precoUnitario = 50;
  total = computed(() => this.quantidade() * this.precoUnitario);

  aumentar(): void {
    this.quantidade.update((v) => v + 1);
  }

  diminuir(): void {
    this.quantidade.update((v) => (v > 0 ? v - 1 : 0));
  }

  zerar(): void {
    this.quantidade.set(0);
  }
}
