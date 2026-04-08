import { Component, inject, OnInit } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos implements OnInit {
  //Injetando o serviço Product para acessar os dados dos produtos
  productService = inject(Product);
  cartService = inject(Cart);
  produtos: any[] = [];

  //Obtendo a lista de produtos do serviço
  ngOnInit(): void {
    console.log("Obtendo produtos...");
    //simulando a chamada de uma API para obter os produtos
    this.produtos = this.productService.getProducts();  }
  

   receberProduto(produto: any) {
     console.log("Produto adicionado:", produto.title);
     //Aqui você pode implementar a lógica para adicionar o produto ao carrinho, por exemplo
     this.cartService.addItem(produto);
   }
}
