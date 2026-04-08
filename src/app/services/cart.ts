import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  //aqui é onde os itens do carrinho serão armazenados
  private items: any[] = [];

  //método para inserir os itens do carrinho
  addItem(item: any) {
    this.items.push(item);
  }

  obterQuantidadeItens(): number {
    return this.items.length;
  }

  
}
