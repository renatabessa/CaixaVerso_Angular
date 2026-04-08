import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //serve toda a aplicacao
})
export class Product {
  //Dados falsos (mockados)
  private listaProdutos = [
    {
      id: 1,
      title: 'Mochila Escolar',
      price: 109.9,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    },
    {
      id: 2,
      title: 'Camiseta Casual',
      price: 49.9,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    },
    {
      id: 3,
      title: 'Jaqueta de Frio',
      price: 199.99,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    },
        {
      id: 4,
      title: 'Jaqueta Alpinista de Frio',
      price: 850.00,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    },
  ];

  getProducts() {
    //Aqui você pode implementar a lógica para buscar os produtos de uma API real
    return this.listaProdutos;
  }
}
